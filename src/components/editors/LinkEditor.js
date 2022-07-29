// import { Container } from "@mui/material";
import React from "react";
import { useGlobalState } from "../../utils/stateContext";
import LinkAddForm from "../linkForms/LinkAddForm";
import LinkEditForm from "../linkForms/LinkEditForm";
import styles from "./LinkEditor.module.css";

const LinkEditor = ({ onSave, onUpdate, onDelete }) => {
  const { store } = useGlobalState();
  const { links } = store;
  console.log("LinkEditor - links state", links);
  return (
    <section className={styles.container}>
      <div className={styles.editor}>
        {links ? (
          links.map((link) => (
            <LinkEditForm
              link={link}
              key={link.id}
              onSave={onSave}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        ) : (
          <h1>no links available</h1>
        )}
        <LinkAddForm onSave={onSave} />
      </div>
    </section>
  );
};

export default LinkEditor;
