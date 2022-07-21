import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const LinkAddForm = ({ onSave }) => {
  console.log("LinkAddForm");

  const initialLinkState = {
    title: null,
    link_address: null,
  };

  const [newLink, setNewLink] = useState(initialLinkState);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("clicked onSubmit");
    onSave(newLink);
    event.target.reset();
    setNewLink(initialLinkState);
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
    console.log("clicked clearForm");
    setNewLink(initialLinkState);
  };

  return (
    <>
      <form id="link-form" onSubmit={onSubmit}>
        <TextField
          sx={{ width: "100%" }}
          required
          label="Link Title"
          variant="standard"
          id="title"
          name="title"
          value={newLink.title || null}
          onChange={handleChange}
        />

        <TextField
          sx={{ width: "100%" }}
          required
          label="Link Address"
          variant="standard"
          id="link_address"
          name="link_address"
          value={newLink.link_address || null}
          onChange={handleChange}
        />

        <Button variant="text" type="submit" color="secondary">
          Save
        </Button>
        <Button
          variant="text"
          type="reset"
          onClick={clearForm}
          color="secondary"
        >
          Clear
        </Button>
      </form>
    </>
  );
};

export default LinkAddForm;
