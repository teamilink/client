import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";
import { TextField, Button } from "@mui/material";
import styles from "./Form.module.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(formData);
    signUpUser(formData).then((user) => {
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
      navigate("/dashboard", { state: { id: user.id } });
    });

    // activeUser(formData.user);
    setUser(initialFormData);
  };

  const handleUserData = (e) => {
    setUser({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        required
        label="Username"
        variant="standard"
        name="username"
        id="username"
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
  );
};

export default SignUp;
