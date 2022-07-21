import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import DashboardPage from "./components/DashboardPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Appearance from "./components/Appearance";
import { reducer } from "./utils/reducer";
import { StateContext } from "./utils/stateContext";

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
        <Container maxWidth="lg">
          <Navbar loggedInUser={loggedInUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard">
              <Route index element={<DashboardPage />} />
              <Route path="appearance" element={<Appearance />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Container>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
