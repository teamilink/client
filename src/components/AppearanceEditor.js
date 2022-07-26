import { Container } from "@mui/material";
import React, { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./AppearanceEditor.module.css";

const AppearanceEditor = ({ appearance, onSubmit, handleText }) => {
  const pictureRef = useRef();

  // picture state - may be not needed
  const [picture, setPicture] = useState(null);

  const handleImage = (event) => {
    console.log(event.target.files[0]);
    console.log(pictureRef.current.files);
    setPicture(event.target.files[0]);
  };

  const handleChange = (event) => {
    handleText(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AppearanceEditor component submit clicked!");

    onSubmit(picture);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.subtitle}>Profile</h1>
        <div className={styles.box}>
          <Button
            variant="standard"
            component="label"
            onChange={handleImage}
            id="picture"
            name="picture"
            accept="image/*"
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
            value={appearance.profile_title}
            onChange={handleChange}
          />
          <TextField
            multiline
            variant="standard"
            rows={4}
            type="string"
            name="bio"
            id="bio"
            label="Bio"
            value={appearance.bio}
            onChange={handleChange}
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
        <Button type="submit" variant="outlined" id="submit" value="Save">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default AppearanceEditor;
