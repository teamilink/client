import React from "react";
// import Card from "./Card";
import styles from "./Preview.module.css";
import YouriLink from "./YouriLink";

const Preview = () => {
  console.log("Preview");

  return (
    <section className={styles.preview}>
      <div className={styles.frame}>
        {/* <Card links={links} appearance={appearance} /> */}
        <YouriLink />
      </div>
    </section>
  );
};

export default Preview;
