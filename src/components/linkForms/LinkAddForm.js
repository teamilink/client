import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./LinkForm.module.css";
import { useGlobalState } from "../../utils/stateContext";
import { saveLink } from "../../services/linksServices";

const LinkAddForm = () => {
  const { store, dispatch } = useGlobalState();
  const { currentUserId } = store;
  const initialLinkState = {
    title: "",
    link_address: "",
    user_id: currentUserId ?? sessionStorage.getItem("id"),
  };

  const [newLink, setNewLink] = useState(initialLinkState);

  const onSubmit = (event) => {
    event.preventDefault();

    // send a request to save the link
    saveLink(newLink).then((response) => {
      dispatch({
        type: "addLink",
        data: response,
      });
    });

    event.target.reset();
    setNewLink(initialLinkState);
  };

  const handleChange = (event) => {
    const eventTarget = event.currentTarget;
    if (eventTarget === null) {
      return;
    }
    event.preventDefault();
    setNewLink({
      ...newLink,
      [eventTarget.name]: eventTarget.value,
    });
  };

  const clearForm = () => {
    setNewLink(initialLinkState);
  };

  return (
    <>
      <form id="link-form" onSubmit={onSubmit} className={styles.form}>
        <TextField
          required
          label="Link Title"
          variant="standard"
          id="title"
          name="title"
          data-testid="link_title"
          value={newLink.title || ""}
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
          value={newLink.link_address || ""}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <Button data-testid="save" variant="outlined" type="submit">
            Save to view
          </Button>
          <Button
            data-testid="clear"
            variant="outlined"
            type="reset"
            onClick={clearForm}
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
};

export default LinkAddForm;
