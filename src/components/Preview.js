import { Container } from "@mui/material";
import React from "react";
import Card from "./Card";

const Preview = ({ links }) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <Card links={links} />
    </Container>
  );
};

export default Preview;
