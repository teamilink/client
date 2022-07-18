import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";

const App = () => {
  const [loggedInUser, setLoggedUser, newSignUp] = useState("");

  const activeUser = (email) => {
    setLoggedUser(email);
    newSignUp(email)
  };

  return (
    <Router>
      <Navbar loggedInUser={loggedInUser} activeUser={activeUser} />
     
      <Routes>
        <Route
          path="signup"
          element={!newSignUp && <SignUp activeUser={activeUser} />}
        />
        <Route
          path="login"
          element={!loggedInUser && <Login activeUser={activeUser} />}
        />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
