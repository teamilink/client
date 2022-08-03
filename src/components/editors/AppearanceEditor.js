import React, { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./AppearanceEditor.module.css";
import { useGlobalState } from "../../utils/stateContext";
import {
  destroyAppearance,
  saveAppearance,
} from "../../services/appearanceServices";

const AppearanceEditor = () => {
  const pictureRef = useRef();

  // picture state - may be not needed
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const { store, dispatch } = useGlobalState();
  const { appearance, currentUserId } = store;

  const handleImage = (event) => {
    console.log("image attached!");
    setPicture(event.target.files[0]);
  };

  const handleChange = (event) => {
    const eventTarget = event.currentTarget;
    console.log("handleChange - appearance");
    dispatch({
      type: "editAppearance",
      data: eventTarget,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("button clicked!");
    pictureRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AppearanceEditor component submit clicked!");
    setLoading(true);
    const data = new FormData();

    data.append("appearance[profile_title]", appearance.profile_title);
    data.append("appearance[bio]", appearance.bio);
    data.append("appearance[bg_color]", appearance.bg_color);
    data.append("appearance[bg_image_url]", appearance.bg_image_url);
    data.append("appearance[picture]", picture);
    data.append("appearance[user_id]", currentUserId);

    saveAppearance(data, appearance.id).then((result) => {
      setLoading(false);
      dispatch({
        type: "setAppearance",
        data: result,
      });
    });
    // }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("delete clicked!", event);

    if (appearance.id) {
      destroyAppearance(appearance.id).then(
        dispatch({
          type: "resetAppearance",
        })
      );
      setPicture("");
    } else if (appearance.id === undefined) {
      dispatch({
        type: "resetAppearance",
      });
      setPicture("");
    }
    // window.location.reload();
  };

  return (
    <section className={styles.container}>
      <div className={styles.editor}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.subtitle}>Profile</h1>
          <div className={styles.box}>
            <div className={styles.inputContainer}>
              <input
                type="file"
                ref={pictureRef}
                id="picture"
                name="picture"
                accept="image/*"
                encType="multipart/form-data"
                onChange={handleImage}
                className={styles.input}
              />
              {!loading && (
                <button
                  className={`${styles.uploadButton} ${
                    picture && (picture.name ? styles.blue : styles.grey)
                  }`}
                  onClick={handleClick}
                >
                  {(picture && picture.name) ||
                    (appearance.uploaded_picture_url && "Picture added") ||
                    "No file"}
                </button>
              )}
              {loading && <div className={styles.loading}></div>}
            </div>
            <TextField
              variant="standard"
              name="profile_title"
              id="profile_title"
              label="Profile Title"
              value={appearance.profile_title ?? ""}
              onChange={handleChange}
              helperText="Maximum 30 characters"
            />
            <TextField
              multiline
              variant="standard"
              rows={2}
              type="string"
              name="bio"
              id="bio"
              label="Bio"
              value={appearance.bio ?? ""}
              onChange={handleChange}
              helperText="Maximum 80 characters"
            />
          </div>
          <h1 className={styles.subtitle}>Custom Appearance</h1>
          <div className={styles.box}>
            <TextField
              select
              variant="standard"
              type="text"
              name="bg_color"
              id="bg_color"
              label="Theme"
              helperText="Please select your background colour theme"
              value={appearance.bg_color}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              <option defaultValue="" disabled hidden></option>
              <option value="light">light</option>
              <option value="dark">dark</option>
              <option value="colourful">colourful</option>
              <option value="pink">pink</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
            </TextField>
            <div
              style={{ cursor: "pointer" }}
              type="click"
              name="bg_image_url"
              id="bg_image_url"
              value={appearance.bg_image_url}
              onClick={handleChange}
            >
              Get a background image
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              type="submit"
              variant="outlined"
              id="submit"
              value="Save"
              // onSubmit={handleSubmit}
              className={styles.button}
            >
              Save
            </Button>
            <Button
              type="reset"
              variant="outlined"
              id="submit"
              value="Reset"
              onClick={handleReset}
              className={styles.button}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppearanceEditor;
