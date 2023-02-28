import React, { useRef, useState } from "react";
import { useGlobalState } from "../../utils/stateContext";
import {
  destroyAppearance,
  saveAppearance,
} from "../../services/appearanceServices";
import { getRandomImage, imageUploader } from "../../services/imageService";
import { TextField, Button, Alert } from "@mui/material";
import styles from "./AppearanceEditor.module.css";

const AppearanceEditor = ({ appendFormData, handlePicture, picture }) => {
  const { store, dispatch } = useGlobalState();
  const { appearance } = store;
  const pictureRef = useRef();
  const [loading, setLoading] = useState(false);

  // limit to get a random image
  const [clickCount, setClickCount] = useState(0);
  const [err, setErr] = useState(null);

  const handleFile = (event) => {
    imageUploader(event.target.files[0]).then((data) => {
      handlePicture({
        name: data.original_filename,
        url: data.url,
        id: data.asset_id,
        created_at: data.created_at,
        height: data.height,
        width: data.width,
      });
      dispatch({
        type: "addPicTimestamp",
        data: Date.now(),
      });
    });
  };

  const getAndStoreImg = () => {
    getRandomImage().then((url) => {
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

    // call the function in the parent components
    const formData = appendFormData();

    // send a request to the server
    saveAppearance(formData, appearance.id).then((result) => {
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
      handlePicture("");
    } else if (appearance.id === undefined) {
      dispatch({
        type: "resetAppearance",
      });
      handlePicture("");
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
                  // disabled={true}
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
              // disabled={true}
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
