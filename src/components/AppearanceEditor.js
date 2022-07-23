import { Container } from "@mui/material";
import React, { useRef, useState } from "react";
import { createAppearance } from "../services/appearanceServices";

const AppearanceEditor = ({ appearance, handleText }) => {
  const pictureRef = useRef();

  // picture state - may be not needed
  const [picture, setPicture] = useState(null);

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
    data.append("appearance[picture]", pictureRef.current.files[0]);
    data.append("appearance[user_id]", 1);

    createAppearance(data);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <h1>Appearance Editor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            // ref={profile_titleRef}
            name="profile_title"
            id="profile_title"
            placeholder="Profile Title"
            value={appearance.profile_title}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            type="string"
            // ref={bioRef}
            name="bio"
            id="bio"
            placeholder="Bio"
            value={appearance.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <select
            type="text"
            // ref={bg_colorRef}
            name="bg_color"
            id="bg_color"
            placeholder="bg_color"
            value={appearance.bg_color}
            onChange={handleChange}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colourful">colourful</option>
          </select>
        </div>
        <div>
          <div
            style={{ cursor: "pointer" }}
            type="click"
            // ref={bg_image_urlRef}
            name="bg_image_url"
            id="bg_image_url"
            value={appearance.bg_image_url}
            onClick={handleChange}
          >
            Get a background image
          </div>
        </div>
        <div>
          <input
            type="file"
            id="picture"
            ref={pictureRef}
            name="picture"
            accept="image/*"
            onChange={handleImage}
          />
        </div>
        <div>
          <input type="submit" id="submit" value="Save" />
        </div>
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
