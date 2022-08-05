import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./NotFound.module.css";

const NotFound = () => (
  <section className={styles.container}>
    <Navbar />
    <h1 className={styles.notFound}>Oops! page not found</h1>
  </section>
);

export default NotFound;
