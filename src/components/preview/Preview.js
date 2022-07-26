// import { Container } from "@mui/material";
import React from "react";
import Card from "./Card";
// import PreviewTest from "./PreviewTest";
import styles from "./Preview.module.css";

const Preview = ({ links, appearance }) => {
  console.log("Preview");

  return (
    <section className={styles.preview}>
      <Card links={links} appearance={appearance} />
      {/* <PreviewTest /> */}
    </section>
  );
};

export default Preview;
