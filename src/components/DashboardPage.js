import React from "react";
import { useLocation } from "react-router-dom";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import Preview from "./preview/Preview";
import Navbar from "./Navbar";
import styles from "./DashboardPage.module.css";

const DashboardPage = () => {
  console.log("Dashboard");
  let location = useLocation();

  return (
    <section className={styles.container}>
      <Navbar />
      <section className={styles.dashboard}>
        {location.pathname === "/dashboard" && <LinkEditor />}
        {location.pathname === "/dashboard/appearance" && <AppearanceEditor />}

        <Preview />
      </section>
    </section>
  );
};

export default DashboardPage;
