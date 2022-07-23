import { Container } from "@mui/material";
import React from "react";
import Card from "./Card";

const Preview = ({ links, appearance }) => {
  console.log("Preview");

  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <Card links={links} appearance={appearance} />
    </Container>
  );
};

export default Preview;
