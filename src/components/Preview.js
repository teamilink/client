import { Container } from "@mui/material";
import React, { useState } from "react";
import ResultPage from "./ResultPage";
import Card from "./Card";

const Preview = ({ links }) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <h1>Preview</h1>
      <Card />
      {/* <ResultPage /> */}
      {/* {links.map((link) => (
        <a
          key={link.id}
          href={link.link_address}
          target="_blank"
          rel="noreferrer"
        >
          {link.title}
        </a>
      ))} */}
    </Container>
  );
};

export default Preview;
