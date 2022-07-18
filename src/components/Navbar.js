import { NavLink } from "react-router-dom";
import { Toolbar, Tabs, Tab } from "@mui/material";

const Navbar = ({ loggedInUser, activeUser }) => {
  const logout = (e) => {
    e.preventDefault();
    activeUser("");
  };

  return (
    <Toolbar>
      {loggedInUser ? (
        <Tabs value={false} aria-label="nav tabs">
          {loggedInUser}
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
            to="dashbaord/appearance"
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
          {/* <NavLink to="/dashboard">Links</NavLink> */}
          {/* <NavLink to="/dashbaord/appearance">Appearance</NavLink> */}
          {/* <NavLink to="/upgrade">Upgrade</NavLink> */}
          {/* <NavLink to="/logout" onClick={logout}>Logout</NavLink> */}
        </Tabs>
      ) : (
        <Tabs value={false} aria-label="nav tabs">
          guest
          <Tab label="Login" value="/login" component={NavLink} to="login" />
          <Tab label="SignUp" value="/signup" component={NavLink} to="signup" />
          {/* <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">SignUp</NavLink> */}
        </Tabs>
      )}
    </Toolbar>
  );
};

export default Navbar;
