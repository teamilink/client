import { NavLink, useNavigate } from "react-router-dom";
import { Toolbar, Tabs, Tab, AppBar } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";

const Navbar = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  console.log("navbar - loggedInUser ?", loggedInUser);
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    dispatch({
      type: "setLoggedInUser",
      data: null,
    });
    navigate("/");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", opacity: "0.8" }}>
      <Toolbar>
        {loggedInUser ? (
          <Tabs value={false} aria-label="nav tabs">
            Hi {loggedInUser}
            <Tab
              label="Links"
              value="/dashboard"
              component={NavLink}
              to="dashboard"
            />
            <Tab
              label="Appearance"
              value="/dashboard/appearance"
              component={NavLink}
              to="dashboard/appearance"
            />
            <Tab
              label="Upgrade"
              value="/upgrade"
              component={NavLink}
              to="upgrade"
            />
            <Tab
              label="Logout"
              value="/logout"
              component={NavLink}
              to="logout"
              onClick={logout}
            />
          </Tabs>
        ) : (
          <Tabs value={false} aria-label="nav tabs">
            guest
            <Tab label="Login" value="/login" component={NavLink} to="login" />
            <Tab
              label="SignUp"
              value="/signup"
              component={NavLink}
              to="signup"
            />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
