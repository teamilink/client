import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";

const CardContainer = () => {
  return (
    <section className={styles.bodyContainer}>
      <Card />
    </section>
  );
};

export default CardContainer;
