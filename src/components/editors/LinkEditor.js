// import { Container } from "@mui/material";
import React from "react";
import { useGlobalState } from "../../utils/stateContext";
import LinkAddForm from "../linkForms/LinkAddForm";
import LinkEditForm from "../linkForms/LinkEditForm";
import styles from "./LinkEditor.module.css";

const LinkEditor = () => {
  const { store } = useGlobalState();
  const { links } = store;

  return (
    <section className={styles.container}>
      <div className={styles.editor}>
        {links &&
          links.map((link) => <LinkEditForm link={link} key={link.id} />)}
        <LinkAddForm />
      </div>
    </section>
  );
};

export default LinkEditor;
