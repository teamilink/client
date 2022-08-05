import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarTabs from "./NavbarTabs";
import styles from "./NavbarExtra.module.css";

const NavbarExtra = () => {
  // navigation for dashboard
  return (
    <div className={styles.header}>
      <NavbarTabs />
      <NavbarLink />
    </div>
  );
};

export default NavbarExtra;
