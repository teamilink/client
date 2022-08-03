import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
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
            />
            <Tab
              label="Appearance"
              value="/dashboard/appearance"
              component={NavLink}
              to="/dashboard/appearance"
            />
            <Tab
              label="Upgrade"
              value="/upgrade"
              component={NavLink}
              to="/upgrade"
            />
            <Tab
              label="Logout"
              value="/logout"
              component={NavLink}
              to="/logout"
              onClick={logout}
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
            />
            <Tab
              label="SignUp"
              value="/signup"
              component={NavLink}
              to="/signup"
            />
          </Tabs>
        )}
      </Toolbar>
    </div>
  );
};

export default NavbarTabs;
