import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import Navbar from "./navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    // go to signup
    // navigate("/signup");
    e.preventDefault();
    navigate("/signup", { state: { username: username } });
  };

  const handleChange = (e) => {
    const result = /^[a-z0-9_-]{0,30}$/.test(e.target.value);
    result ? setUsername(e.target.value) : setUsername(false);
  };

  return (
    <section className={styles.container}>
      <Navbar />

      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title} data-testid="home-title">
          Everything in one link
        </h1>

        <TextField
          id="username"
          name="username"
          label="/yourname"
          onChange={handleChange}
          className={styles.paddedRight}
        />
        <Button variant="outlined" type="button" color="primary">
          Claim your iLink
        </Button>
      </form>
    </section>
  );
};

export default Home;
