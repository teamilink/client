import { Container } from "@mui/material";
import React from "react";
import LinkAddForm from "../linkForms/LinkAddForm";
import LinkEditForm from "../linkForms/LinkEditForm";
import styles from "./LinkEditor.module.css";

const LinkEditor = ({ links, onSave, onUpdate, onDelete }) => {
  return (
    <section className={styles.editor}>
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
    </section>
  );
};

export default LinkEditor;
