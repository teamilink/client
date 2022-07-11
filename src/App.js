import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      </Routes>
    </Router>
  );
};

export default App;
