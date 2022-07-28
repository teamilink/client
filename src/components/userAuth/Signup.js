import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";
import { TextField, Button, Alert } from "@mui/material";
import styles from "./Form.module.css";
import Navbar from "../Navbar";

const SignUp = () => {
  const { dispatch } = useGlobalState();
  console.log("Signup");
  const navigate = useNavigate();
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setUser] = useState(initialFormData);
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(formData);
    signUpUser(formData)
      .then((user) => {
        if (user.error) {
          setErr(user.error);
        } else {
          console.log("signup user", user);
          dispatch({
            type: "setLoggedInUser",
            data: user.username,
          });

          dispatch({
            type: "setCurrentUserId",
            data: user.id,
          });
          sessionStorage.setItem("id", user.id);
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("token", user.jwt);
          navigate("/dashboard", { state: { isNewUser: true } });
        }
      })
      .catch((error) => console.log(error));

    // activeUser(formData.user);
    setUser(initialFormData);
  };

  const handleUserData = (e) => {
    if (e.target.id === "username") {
      if (e.target.value.match(/^[a-z0-9_-]{4,30}$/)) {
        setUser({
          ...formData,
          username: e.target.value,
        });
      } else {
        setErr(
          "Username only can contain lowercase letters, numbers, underscores and hyphens"
        );
      }
    }

    setErr(null);
    setUser({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className={styles.container}>
      <Navbar />

      <form onSubmit={handleSubmit} className={styles.form}>
        <div
          className={`${styles.error} ${err ? styles.display : styles.hidden}`}
        >
          <Alert severity="error" variant="outlined">
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
          helperText="Username must not contain any space. Choose a username 4–30 characters long."
          onChange={handleUserData}
          value={formData.username}
        />
        <TextField
          required
          label="Email"
          variant="standard"
          name="email"
          id="email"
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
          value={formData.password}
          onChange={handleUserData}
        />

        <Button variant="outlined" type="submit" color="primary">
          Sign Up
        </Button>
      </form>
    </section>
  );
};

export default SignUp;
