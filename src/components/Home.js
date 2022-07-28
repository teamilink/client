import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { Button, TextField } from "@mui/material";


import Navbar from "./Navbar";
import styles from "./Home.module.css";

const Home = () => {
  const { dispatch } = useGlobalState();
  const {email, setEmail} = useState("");
  console.log(setEmail)
 
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // store the email value
    dispatch({
      type: "setNewEmail",
      data: email,
    })

    // go to signup
    navigate("/signup");
  }

  //receive the email from the user entered
  const handleChange = (e) => {
    setEmail({
      ...email,
      [email]: e.target.value,
    })
  }

  return (
    <section className={styles.container}>
      <Navbar />
     
      <div className={styles.form}>
        <h1>Everything in one link</h1>
        <TextField id="email" name="email" className={styles.paddedRight} onChange={handleChange} />
        <Button variant="outlined" type="button" onClick={handleSubmit} color="primary">
            Claim your iLink
        </Button>
      </div>
    </section>
  );
};

export default Home;
