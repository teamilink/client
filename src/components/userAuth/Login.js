import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInUser } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";
import { TextField, Button, Alert } from "@mui/material";
import Navbar from "../navbar/Navbar";
import styles from "./Form.module.css";

const Login = () => {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();
  const location = useLocation();

  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setUser] = useState(initialFormData);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // set the user authorisation in route and send the state
    if (location.state === "Unauthorised") {
      setErr("Login to your dashboard");
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // send a request for signin
    signInUser(formData)
      .then((user) => {
        if (user.error) {
          setErr(user.error);
        } else {
          // store the data in the state & the session storage
          dispatch({
            type: "setLoggedInUser",
            data: user.username,
          });
          dispatch({
            type: "setCurrentUserId",
            data: user.id,
          });
          dispatch({
            type: "setToken",
            data: user.jwt,
          });

          sessionStorage.setItem("id", user.id);
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("token", user.jwt);

          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setUser(initialFormData);
  };

  const handleUserData = (e) => {
    setErr(null);
    setUser({
      ...formData,
      [e.target.id]: e.target.value,
    });
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
            <Alert severity="error" variant="outlined">
              {err && err}
            </Alert>
          </div>
          <h1 className={styles.title}>Nice to see you again!</h1>
          <TextField
            required
            type="email"
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
            name="password"
            id="password"
            type="password"
            value={formData.password}
            onChange={handleUserData}
          />

          <Button variant="outlined" type="submit" color="primary">
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
