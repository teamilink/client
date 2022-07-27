import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import Login from "./components/userAuth/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/userAuth/Signup";
import Home from "./components/Home";
import NotFound from "./components/notFound/NotFound";

import { reducer } from "./utils/reducer";
import { StateContext } from "./utils/stateContext";
import styles from "./App.module.css";
import Preview from "./components/preview/Preview";
import YouriLink from "./components/preview/YouriLink";

const App = () => {
  const initialState = {
    loggedInUser: sessionStorage.getItem("username") || null,
    currentUserId: sessionStorage.getItem("id") || null,
    token: sessionStorage.getItem("token") || null,
  };

  // loggedInUser state needs to be accessed in different heirachy of this app
  // To store more states and set functions by creating reducer and context
  const [store, dispatch] = useReducer(reducer, initialState);
  const { loggedInUser } = store;

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <Router>
        <section className={styles.app}>
          <section className={styles.container}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:username" element={<YouriLink />} />
              {/* <Route path="/:username" element={<Preview />} /> */}
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
