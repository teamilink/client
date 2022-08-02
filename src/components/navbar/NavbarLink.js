import React from "react";
import { useLocation } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
import styles from "./NavbarLink.module.css";

const NavbarLink = () => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  const location = useLocation();
  const ilinkUrl = `https://ilinkapp.netlify.app/ilink/${loggedInUser}`;

  const pathnameValidation = (location) => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/appearance"
    ) {
      return true;
    }
  };

  return (
    <>
      {loggedInUser && (
        <section className={styles.container}>
          <h1 className={styles.title}>Your iLink: </h1>
          <a
            href={ilinkUrl}
            className={styles.address}
            target="_blank"
            rel="noreferrer"
          >
            {ilinkUrl}
          </a>
        </section>
      )}
    </>
  );
};

export default NavbarLink;
