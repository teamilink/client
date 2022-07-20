import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../services/authServices";

const SignUp = ({ activeUser }) => {
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
      sessionStorage.setItem("username", user.username);
      sessionStorage.setItem("token", user.jwt);
      navigate("/dashboard", { state: { id: user.id } });
    });

    activeUser(formData.user);
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
          <label>Username (for endpoint):</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleUserData}
            value={formData.username}
          />
        </div>
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
        <input type="submit" value="SignUp" />
      </form>
    </>
  );
};

export default SignUp;
