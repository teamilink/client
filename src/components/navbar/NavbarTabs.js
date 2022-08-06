import React from "react";
import { useGlobalState } from "../../utils/stateContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Toolbar, Tabs, Tab } from "@mui/material";
import styles from "./NavbarTabs.module.css";

const NavbarTabs = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

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
    <div className={styles.navbar}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1 data-testid="navbar-title" className={styles.title}>
          iLink
        </h1>
      </NavLink>

      <Toolbar>
        {loggedInUser ? (
          <Tabs value={false} aria-label="nav tabs">
            <Tab
              label="Links"
              value="/dashboard"
              component={NavLink}
              to="/dashboard"
              key="dashboard"
            />
            <Tab
              label="Appearance"
              value="/dashboard/appearance"
              component={NavLink}
              to="/dashboard/appearance"
              key="appearance"
            />
            <Tab
              label="Logout"
              value="/logout"
              component={NavLink}
              to="/logout"
              onClick={logout}
              key="logout"
            />
          </Tabs>
        ) : (
          <Tabs value={false} aria-label="nav tabs">
            <Tab
              label="Login"
              value="/login"
              component={NavLink}
              to="/login"
              data-testid="login"
              key="login"
            />
            <Tab
              label="SignUp"
              value="/signup"
              component={NavLink}
              to="/signup"
              key="signup"
            />
          </Tabs>
        )}
      </Toolbar>
    </div>
  );
};

export default NavbarTabs;
