import React from "react";
import styles from "./Preview.module.css";
import PreviewFrame from "./PreviewFrame";

const Preview = () => {
  console.log("Preview");

  return (
    <div className={styles.preview}>
      <PreviewFrame />
    </div>
  );
};

export default Preview;
