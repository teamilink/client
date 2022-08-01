import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInUser } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";
import { TextField, Button, Alert } from "@mui/material";
import Navbar from "../navbar/Navbar";
import styles from "./Form.module.css";

const Login = () => {
  console.log("Login");
  const { dispatch } = useGlobalState();

  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setUser] = useState(initialFormData);
  const [err, setErr] = useState(null);

  const location = useLocation();
  useEffect(() => {
    if (location.state === "Unauthorised") {
      console.log(location.state);
      setErr("Login to your dashboard");
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("auth login button clicked");
    signInUser(formData)
      .then((user) => {
        if (user.error) {
          setErr(user.error);
        } else {
          console.log("signin user", user);
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
          navigate("/dashboard", { state: { id: user.id } });
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

      <form onSubmit={handleSubmit} className={styles.form}>
        <div
          className={`${styles.error} ${err ? styles.display : styles.hidden}`}
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
    </section>
  );
};

export default Login;
