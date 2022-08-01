import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardPage from "../DashboardPage";
import Login from "../userAuth/Login";
import SignUp from "../userAuth/Signup";
import Home from "../Home";
import NotFound from "../notFound/NotFound";

import { reducer } from "../../utils/reducer";
import { StateContext } from "../../utils/stateContext";
import styles from "./App.module.css";
import YouriLink from "../preview/YouriLink";

const App = () => {
  const initialState = {
    loggedInUser: sessionStorage.getItem("username") || null,
    currentUserId: sessionStorage.getItem("id") || null,
    token: sessionStorage.getItem("token") || null,
    links: [],
    appearance: {
      profile_title: "",
      bio: "",
      bg_color: "",
    },
  };

  // loggedInUser state needs to be accessed in different heirachy of this app
  // To store more states and set functions by creating reducer and context
  const [store, dispatch] = useReducer(reducer, initialState);
  const { loggedInUser } = store;

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <Router>
        <section data-testid="app" className={styles.app}>
          <section className={styles.container}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ilink/:username" element={<YouriLink />} />
              <Route path="dashboard">
                <Route
                  index
                  element={
                    loggedInUser ? (
                      <DashboardPage />
                    ) : (
                      <Navigate to="/login" state={"Unauthorised"} />
                    )
                  }
                />
                <Route
                  path="appearance"
                  element={
                    loggedInUser ? (
                      <DashboardPage />
                    ) : (
                      <Navigate to="/login" state={"Unauthorised"} />
                    )
                  }
                />
              </Route>
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </section>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
