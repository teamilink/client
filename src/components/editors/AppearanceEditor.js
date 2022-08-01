// import { Container } from "@mui/material";
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
  const [picture, setPicture] = useState(null);
  const { store, dispatch } = useGlobalState();
  const { appearance, currentUserId, loggedInUser } = store;

  const handleImage = (event) => {
    console.log(event.target.files[0]);
    console.log(pictureRef.current.files);
    setPicture(event.target.files[0]);
  };

  const handleChange = (event) => {
    const eventTarget = event.currentTarget;
    dispatch({
      type: "editAppearance",
      data: eventTarget,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AppearanceEditor component submit clicked!");

    if (appearance.id) {
      saveAppearance(appearance, appearance.id).then((result) => {
        dispatch({
          type: "setAppearance",
          data: result,
        });
      });
    } else {
      const data = new FormData();

      data.append("appearance[profile_title]", appearance.profile_title);
      data.append("appearance[bio]", appearance.bio);
      data.append("appearance[bg_color]", appearance.bg_color);
      data.append("appearance[bg_image_url]", appearance.bg_image_url);
      data.append("appearance[picture]", picture);
      data.append("appearance[user_id]", currentUserId);

      saveAppearance(data, appearance.id).then((result) => {
        dispatch({
          type: "setAppearance",
          data: result,
        });
      });
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("delete clicked!", event);

    destroyAppearance(appearance.id).then(
      dispatch({
        type: "resetAppearance",
      })
    );
    // window.location.reload();
  };

  return (
    <section className={styles.container}>
      <div className={styles.editor}>
        <form className={styles.form}>
          <h1 className={styles.subtitle}>Profile</h1>
          <div className={styles.box}>
            <Button
              variant="standard"
              component="label"
              onChange={handleImage}
              id="picture"
              name="picture"
              accept="image/*"
              encType="multipart/form-data"
            >
              {pictureRef.current
                ? // ? pictureRef.current.files[0].name
                  "file uploaded"
                : `Upload Profile Pictrue`}
              <input
                type="file"
                ref={pictureRef}
                hidden
                id="picture"
                name="picture"
                accept="image/*"
                encType="multipart/form-data"
              />
            </Button>
            {/* <TextField
            variant="standard"
            type="file"
            ref={pictureRef}
            id="picture"
            name="picture"
            accept="image/*"
            helperText="Upload your profile image"
            onChange={handleImage}
          /> */}
            <TextField
              variant="standard"
              name="profile_title"
              id="profile_title"
              label="Profile Title"
              value={appearance.profile_title ?? loggedInUser}
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
              value={appearance.bio}
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
              onSubmit={handleSubmit}
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
