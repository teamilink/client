import { signInUser } from "../services/authServices";

class UserHandler {
  validateUsername(value) {
    return /^[a-z0-9_-]{0,30}$/.test(value);
  }

  login(data) {
    signInUser(data) //
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
          dispatch({
            type: "setToken",
            data: user.jwt,
          });

          this.saveLocalStorage(user);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveLocalStorage(user) {
    sessionStorage.setItem("id", user.id);
    sessionStorage.setItem("username", user.username);
    sessionStorage.setItem("token", user.jwt);
  }
}

export default UserHandler;
