import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../services/authServices";

const Login = ({ activeUser }) => {
  console.log("Login");
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
      sessionStorage.setItem("username", user.username);
      sessionStorage.setItem("token", user.jwt);
      navigate("/dashboard", { state: { id: user.id } });
    });
    activeUser(formData.email);
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
          <label>Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleUserData}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleUserData}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
