import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./LinkForm.module.css";
import { useGlobalState } from "../../utils/stateContext";

const LinkAddForm = ({ onSave }) => {
  // console.log("LinkAddForm");

  // const { store, dispatch } = useGlobalState();
  // const { links } = store;
  const initialLinkState = {
    title: "",
    link_address: "",
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
    const eventTarget = event.currentTarget;
    if (eventTarget === null) {
      return;
    }
    event.preventDefault();
    setNewLink({
      ...newLink,
      [eventTarget.name]: eventTarget.value,
    });
    // dispatch({
    //   type: "setALink",
    //   data: eventTarget,
    // });
  };

  const clearForm = () => {
    console.log("clicked clearForm");
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
          value={newLink.link_address || ""}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
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
        </div>
      </form>
    </>
  );
};

export default LinkAddForm;
