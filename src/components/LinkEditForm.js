import React, { useRef, useState } from "react";
// import { saveLink } from "../services/linksServices";
import { Box, TextField } from "@mui/material";
import Buttons from "./Buttons";

// !important!
// To change the preview in real time,
// directly set the links state on DashboardPage.
// Otherwise, if you use local state,
// the preview won't be updated at the same time

const LinkEditForm = ({ link, onSave, onUpdate, onDelete }) => {
  console.log("LinkEditForm");

  const titleRef = useRef();
  const linkAddressRef = useRef();
  // if there's no link created, the id is undefined
  // id will be assigned once it stores in DB
  const { id, title, link_address } = link;

  const handleChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    onUpdate({
      ...link,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <>
      <Box
        component="form"
        id="link-form"
        // onSubmit={onSubmit}
      >
        <div id="link-form-title">
          <TextField
            sx={{ width: "100%" }}
            required
            label="Link Title"
            variant="standard"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            ref={titleRef}
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
            value={link_address}
            onChange={handleChange}
            ref={linkAddressRef}
          />
        </div>

        <Buttons id={id} onDelete={onDelete} />
      </Box>
    </>
  );
};

export default LinkEditForm;
