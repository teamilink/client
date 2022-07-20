import { Container } from "@mui/material";
import React from "react";
import LinkForm from "./LinkForm";
import LinkPreview from "./LinkPreview";

const LinkFormList = ({ links, onSave, onUpdate, onDelete }) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <LinkForm onSave={onSave} />
      {links.map((link) => (
        <LinkPreview
          key={link.id}
          {...link}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </Container>
  );
};

export default LinkFormList;
