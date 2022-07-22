import { Container } from "@mui/material";
import React from "react";
import LinkAddForm from "./linkForms/LinkAddForm";
import LinkEditForm from "./linkForms/LinkEditForm";

const Editor = ({ links, onSave, onUpdate, onDelete }) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
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
    </Container>
  );
};

export default Editor;
