import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../utils/stateContext";
import { signUpUser } from "../../services/authServices";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { TextField, Button, Alert, CircularProgress } from "@mui/material";
import styles from "./Form.module.css";

const SignUp = () => {
  const { dispatch } = useGlobalState();
  const location = useLocation();
  const navigate = useNavigate();
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setUser] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!location.state) {
      setUser(initialFormData);
    } else if (location.state.username === false) {
      setErr("You can't use the username. Please check the format");
    } else {
      setUser({
        ...formData,
        username: location.state.username,
      });
    } // eslint-disable-next-line
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // send a request for signup
    signUpUser(formData)
      .then((user) => {
        if (user.error) {
          setLoading(false);
          setErr(user.error);
        } else {
          // store the data in the state & the session storage
          dispatch({
            type: "setLoggedInUser",
            data: user.username,
          });
          dispatch({
            type: "setToken",
            data: user.jwt,
          });
          dispatch({
            type: "setCurrentUserId",
            data: user.id,
          });

          sessionStorage.setItem("id", user.id);
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("token", user.jwt);

          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleUserData = (e) => {
    // validate username
    if (e.target.id === "username") {
      const result = /^[a-z0-9_-]{0,30}$/.test(e.target.value);

      if (result) {
        setErr(null);
        setUser({
          ...formData,
          [e.target.id]: e.target.value,
        });
      } else {
        setErr("Please check your username format");
      }
    } else {
      setErr(null);
      setUser({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  return (
    <section className={styles.container}>
      <Navbar />
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div
            className={`${styles.error} ${
              err ? styles.display : styles.hidden
            }`}
          >
            <Alert data-testid="error" severity="error" variant="outlined">
              {err && err}
            </Alert>
          </div>
          <h1 className={styles.title}>Welcome!</h1>
          <TextField
            required
            label="Username"
            variant="standard"
            name="username"
            id="username"
            data-testid="username"
            helperText="Username must not contain any space. Choose a username 4–30 characters long."
            onChange={handleUserData}
            value={formData.username}
          />
          <TextField
            required
            type="email"
            label="Email"
            variant="standard"
            name="email"
            id="email"
            data-testid="email"
            value={formData.email}
            onChange={handleUserData}
          />

          <TextField
            required
            label="Password"
            variant="standard"
            type="password"
            name="password"
            id="password"
            data-testid="password"
            value={formData.password}
            onChange={handleUserData}
          />

          <Button
            data-testid="button"
            variant="outlined"
            type="submit"
            color="primary"
            disabled={loading}
          >
            Sign Up
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: "rgb(30, 216, 229)",
                  position: "absolute",
                }}
              />
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
