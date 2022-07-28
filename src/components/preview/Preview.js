// import { Container } from "@mui/material";
import React from "react";
import { useGlobalState } from "../../utils/stateContext";
// import Card from "./Card";
import CardCopy from "./CardCopy";
import styles from "./Preview.module.css";

const Preview = ({ links, appearance }) => {
  console.log("Preview");
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  return (
    <section className={styles.preview}>
      {/* <Card links={links} appearance={appearance} /> */}
      <iframe
        className={styles.frame}
        src={`http://localhost:3000/${loggedInUser}`}
        title="preview"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Preview;
