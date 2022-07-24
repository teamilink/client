import { Container } from "@mui/material";
import React, { useRef, useState } from "react";
import { createAppearance } from "../services/appearanceServices";
import { useGlobalState } from "../utils/stateContext";
import { TextField, Button } from "@mui/material";
import styles from "./AppearanceEditor.module.css";

const AppearanceEditor = ({ appearance, handleText }) => {
  const pictureRef = useRef();

  // picture state - may be not needed
  const [picture, setPicture] = useState(null);
  const { store } = useGlobalState();
  const { currentUserId } = store;

  const handleImage = () => {
    console.log(pictureRef.current.files);
    setPicture(pictureRef.current.files[0]);
  };

  const handleChange = (event) => {
    handleText(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AppearanceEditor component submit clicked!");

    const data = new FormData();
    data.append("appearance[profile_title]", appearance.profile_title);
    data.append("appearance[bio]", appearance.bio);
    data.append("appearance[bg_color]", appearance.bg_color);
    data.append("appearance[bg_image_url]", appearance.bg_image_url);
    data.append("appearance[picture]", picture);
    data.append("appearance[user_id]", currentUserId);

    createAppearance(data);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.subtitle}>Profile</h1>
        <div className={styles.box}>
          <TextField
            variant="standard"
            type="file"
            id="picture"
            ref={pictureRef}
            name="picture"
            accept="image/*"
            helperText="Upload your profile image"
            onChange={handleImage}
          />
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

// const updated = {
//   profile_title: profile_titleRef.current.value,
//   bio: bioRef.current.value,
//   bg_color: bg_colorRef.current.value,
//   bg_image_url: bg_image_urlRef.current.value,
//   user_id: 1,
//   picture: pictureRef.current.files[0],
// };
// console.log(updated);

// createAppearance(updated);

// const formData = new FormData();
// formData.append("profile_title", profile_titleRef.current.value);
// formData.append("bio", bioRef.current.value);
// formData.append("bg_color", bg_colorRef.current.value);
// formData.append("bg_image_url", bg_image_urlRef.current.value);
// formData.append("user_id", 1);
// formData.append("picture", picture);

// for (let p of formData) {
//   console.log(p);
// }
