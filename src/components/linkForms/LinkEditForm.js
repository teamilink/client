import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./LinkForm.module.css";

// !important!
// To change the preview in real time,
// directly set the links state on DashboardPage.
// Otherwise, if you use local state,
// the preview won't be updated at the same time

const LinkEditForm = ({ link, onSave, onUpdate, onDelete }) => {
  // console.log("LinkEditForm");

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

  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(event.currentTarget.id);
  };

  return (
    <>
      <form id="link-form" className={styles.form}>
        <TextField
          required
          label="Link Title"
          variant="standard"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          inputProps={{ maxLength: 100 }}
        />
        <TextField
          required
          label="Link Address"
          variant="standard"
          id="link_address"
          name="link_address"
          value={link_address}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <Button variant="text" type="submit" color="secondary">
            Update
          </Button>
          <Button
            variant="text"
            type="submit"
            color="secondary"
            name={id}
            id={id}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </form>
    </>
  );
};

export default LinkEditForm;
