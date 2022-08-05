import React from "react";
import { useGlobalState } from "../../utils/stateContext";
import styles from "./NavbarLink.module.css";

const NavbarLink = () => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  // display the link based on the current url
  const ilinkUrl = window.location.href.includes("localhost")
    ? `http://localhost:3000/ilink/${loggedInUser}`
    : `https://ilinkapp.netlify.app/ilink/${loggedInUser}`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your iLink: </h1>
      <a
        href={ilinkUrl}
        className={styles.address}
        target="_blank"
        rel="noreferrer"
      >
        {ilinkUrl}
      </a>
    </div>
  );
};

export default NavbarLink;
