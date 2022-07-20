import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import DashboardPage from "./components/DashboardPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Appearance from "./components/Appearance";

const App = () => {
  const [loggedInUser, setLoggedUser] = useState("");
  const [newSignUp, setNewSignUp] = useState("");

  const activeUser = (email) => {
    setLoggedUser(email);
    setNewSignUp(email);
  };

  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar loggedInUser={loggedInUser} activeUser={activeUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard">
            <Route index element={<DashboardPage />} />
            <Route path="appearance" element={<Appearance />} />
          </Route>
          <Route
            path="signup"
            element={!newSignUp && <SignUp activeUser={activeUser} />}
          />
          <Route
            path="login"
            element={!loggedInUser && <Login activeUser={activeUser} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
