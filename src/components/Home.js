import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import Navbar from "./navbar/Navbar";
import styles from "./Home.module.css";

const Home = ({ userAuth }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    // go to signup
    // navigate("/signup");
    navigate("/signup", { state: { username: username } });
  };

  const handleChange = (e) => {
    const result = /^[a-z0-9_-]{0,30}$/.test(e.target.value);
    result ? setUsername(e.target.value) : setUsername(false);
  };

  return (
    <section className={styles.container}>
      <Navbar />

      <div className={styles.form}>
        <h1 data-testid="home-title">Everything in one link</h1>

        <TextField
          id="username"
          name="username"
          label="/yourname"
          onChange={handleChange}
          className={styles.paddedRight}
        />
        <Button
          variant="outlined"
          type="button"
          onClick={handleSubmit}
          color="primary"
        >
          Claim your iLink
        </Button>
      </div>
    </section>
  );
};

export default Home;
