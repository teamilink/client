import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";
import { TextField, Button } from "@mui/material";

const Login = () => {
  console.log("Login");
  const { dispatch } = useGlobalState();

  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setUser] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(formData);
    signInUser(formData).then((user) => {
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
      // sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("token", user.jwt);
      navigate("/dashboard", { state: { id: user.id } });
    });

    setUser(initialFormData);
  };

  const handleUserData = (e) => {
    setUser({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            sx={{ width: "50%" }}
            required
            label="Email"
            variant="standard"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleUserData}
          />
        </div>
        <div>
          <TextField
            sx={{ width: "50%" }}
            required
            label="Password"
            variant="standard"
            name="password"
            id="password"
            type="password"
            value={formData.password}
            onChange={handleUserData}
          />
        </div>

        <Button variant="outlined" type="submit" color="primary">
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
