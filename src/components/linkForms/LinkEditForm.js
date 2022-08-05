import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./LinkForm.module.css";
import { useGlobalState } from "../../utils/stateContext";
import { deleteLink, saveLink } from "../../services/linksServices";

// !important!
// To change the preview in real time,
// directly set the links state on DashboardPage.
// Otherwise, if you use local state,
// the preview won't be updated at the same time

const LinkEditForm = ({ link }) => {
  const { id, title, link_address } = link;
  const { dispatch } = useGlobalState();

  const handleChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }

    event.preventDefault();

    let updatedLink = {
      ...link,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    dispatch({
      type: "updateLinks",
      data: updatedLink,
    });

    // send a request to save the data
    saveLink(updatedLink);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;

    deleteLink(id).then(() => {
      dispatch({
        type: "removeLink",
        data: id,
      });
      window.location.reload();
    });
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
          data-testid="link_title"
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
          type="url"
          data-testid="link_address"
          value={link_address}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <Button
            data-testid="update"
            variant="text"
            type="submit"
            color="secondary"
          >
            Update
          </Button>
          <Button
            variant="text"
            type="submit"
            color="secondary"
            data-testid="delete"
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
