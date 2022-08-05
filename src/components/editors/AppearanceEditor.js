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
  const { store, dispatch } = useGlobalState();
  const { appearance, currentUserId } = store;

  const pictureRef = useRef();
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  // limit to get a random image
  const [clickCount, setClickCount] = useState(0);
  const [err, setErr] = useState(null);

  const handleFile = (event) => {
    setPicture(event.target.files[0]);
  };

  const getAndStoreImg = () => {
    getRandomImage().then((url) => {
      console.log(url);
      dispatch({
        type: "addRandomImage",
        data: url,
      });
    });
  };

  const handleRandomImage = (event) => {
    event.preventDefault();

    setClickCount(clickCount + 1);
    if (clickCount < 2) {
      getAndStoreImg();
    } else {
      getAndStoreImg();
      setErr("Sorry, you can only get 3 pictures");
    }
  };

  const handleChange = (event) => {
    dispatch({
      type: "editAppearance",
      data: event.currentTarget,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    pictureRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // create FormData to send the data including a file
    const data = new FormData();
    data.append("appearance[profile_title]", appearance.profile_title);
    data.append("appearance[bio]", appearance.bio);
    data.append("appearance[bg_color]", appearance.bg_color);
    data.append("appearance[picture]", picture);
    data.append("appearance[user_id]", currentUserId);
    // only add bg_image_url when it has value
    // otherwise null/undefined become "null"/"undefined"
    appearance.bg_image_url &&
      data.append("appearance[bg_image_url]", appearance.bg_image_url);

    // send a request to the server
    saveAppearance(data, appearance.id).then((result) => {
      setLoading(false);
      dispatch({
        type: "setAppearance",
        data: result,
      });
      window.location.reload();
    });
  };

  const handleReset = (event) => {
    event.preventDefault();

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
                    (appearance.picture_url && "Picture added") ||
                    "No file"}
                </button>
              )}
              {loading && <div className={styles.loading}></div>}
            </div>
            <button
              className={`${styles.random} ${err && styles.inactive}`}
              type="click"
              name="bg_image_url"
              id="bg_image_url"
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
              required
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
              required
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
              data-testid="save"
              className={styles.button}
            >
              Save
            </Button>
            <Button
              type="reset"
              variant="outlined"
              id="submit"
              value="Reset"
              data-testid="reset"
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
