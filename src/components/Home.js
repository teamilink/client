import React from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <section className={styles.container}>
      <Navbar />
      <h1>Home</h1>
      <h5>Home component just for routing</h5>
    </section>
  );
};

export default Home;
