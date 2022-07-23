import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import DashboardPage from "./components/DashboardPage";
import Login from "./components/userAuth/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/userAuth/Signup";
import Home from "./components/Home";

import { reducer } from "./utils/reducer";
import { StateContext } from "./utils/stateContext";
import AppearanceEditor from "./components/AppearanceEditor";
import styles from "./App.module.css";

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
  // const [isAppearnace, setIsAppearance] = useState(false)

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <Router>
        <section className={styles.container}>
          <Navbar loggedInUser={loggedInUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard">
              <Route index element={<DashboardPage />} />
              <Route path="appearance" element={<DashboardPage />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </section>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
