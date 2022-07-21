import React, { useRef, useState } from "react";
// import { saveLink } from "../services/linksServices";
import { Box, TextField } from "@mui/material";
import Buttons from "./Buttons";

const LinkAddForm = ({ onSave }) => {
  console.log("LinkAddForm");
  const formRef = useRef();

  const [newLink, setNewLink] = useState({
    title: null,
    link_address: null,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("clicked onSubmit");
    onSave(newLink);
    formRef.current.reset();
  };

  const handleChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    setNewLink({
      ...newLink,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const clearForm = () => {
    formRef.current.reset();
  };

  return (
    <>
      <Box
        component="form"
        id="link-form"
        onSubmit={onSubmit}
        ref={formRef}
        onReset={clearForm}
      >
        <div id="link-form-title">
          <TextField
            sx={{ width: "100%" }}
            required
            label="Link Title"
            variant="standard"
            id="title"
            name="title"
            value={newLink.title}
            onChange={handleChange}
          />
        </div>
        <div id="link-form-address">
          <TextField
            sx={{ width: "100%" }}
            required
            label="Link Address"
            variant="standard"
            id="link_address"
            name="link_address"
            value={newLink.link_address}
            onChange={handleChange}
          />
        </div>
        <Buttons />
      </Box>
    </>
  );
};

export default LinkAddForm;
