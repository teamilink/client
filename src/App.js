import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const App = () => {
  const [loggedInUser, setLoggedUser] = useState("");

  const activeUser = (email) => {
    setLoggedUser(email);
  };

  return (
    <Router>
      <Navbar loggedInUser={loggedInUser} activeUser={activeUser} />
      <Routes>
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
