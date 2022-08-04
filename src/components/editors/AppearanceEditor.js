import React, { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./AppearanceEditor.module.css";
import { useGlobalState } from "../../utils/stateContext";
import {
  destroyAppearance,
  saveAppearance,
} from "../../services/appearanceServices";
import { getRandomImage } from "../../services/imageService";

const AppearanceEditor = () => {
  const pictureRef = useRef();
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const { store, dispatch } = useGlobalState();
  const { appearance, currentUserId } = store;

  // limit to get a random image
  const [clickCount, setClickCount] = useState(0);
  const [err, setErr] = useState(null);

  const handleFile = (event) => {
    console.log("image attached!");
    setPicture(event.target.files[0]);
  };

  const handleRandomImage = () => {
    setClickCount(clickCount + 1);
    if (clickCount < 2) {
      getRandomImage().then((url) =>
        dispatch({
          type: "addRandomImage",
          data: url,
        })
      );
    } else {
      setErr("Sorry, you can only get 3 pictures");
    }
    console.log(err);
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
    data.append("appearance[picture_url]", appearance.picture_url);
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
                onChange={handleFile}
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
            <button
              className={`${styles.random} ${err && styles.inactive}`}
              type="click"
              name="picture_url"
              id="picture_url"
              onClick={handleRandomImage}
            >
              {!err && clickCount === 0 ? `Get a random image` : err}
              {clickCount > 0 &&
                clickCount < 3 &&
                `You have ${3 - clickCount} ${
                  3 - clickCount === 1 ? "attempt" : "attempts"
                } left`}
            </button>

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
