import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import Navbar from "./Navbar";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    // go to signup
    // navigate("/signup");
    navigate("/signup", { state: { username: username } });
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <section className={styles.container}>
      <Navbar />
     
      <div className={styles.form}>
        <h1>Everything in one link</h1>
      
        <TextField id="username" name="username" label="/yourname" onChange={handleChange} className={styles.paddedRight} />
        <Button variant="outlined" type="button" onClick={handleSubmit} color="primary">
            Claim your iLink
        </Button>
        </div>
    </section>
  );
};

export default Home;
