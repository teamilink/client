import React, { useRef, useState } from "react";

import {
  createAppearance,
  // imageUploader,
} from "../services/appearanceServices";

const Attachment = (props) => {
  const profile_titleRef = useRef();
  const bioRef = useRef();
  const bg_colorRef = useRef();
  const bg_image_urlRef = useRef();
  const pictureRef = useRef();

  // picture state - may be not needed
  const [picture, setPicture] = useState(null);

  const handleChange = () => {
    console.log(pictureRef.current.files);
    setPicture(pictureRef.current.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Attachment component submit clicked!");

    const data = new FormData();
    data.append("appearance[profile_title]", profile_titleRef.current.value);
    data.append("appearance[bio]", bioRef.current.value);
    data.append("appearance[bg_color]", bg_colorRef.current.value);
    data.append("appearance[bg_image_url]", bg_image_urlRef.current.value);
    data.append("appearance[picture]", pictureRef.current.files[0]);
    data.append("appearance[user_id]", 1);

    createAppearance(data);
  };
  return (
    <>
      <h1>Image Uploader</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={profile_titleRef}
          name="profile_title"
          id="profile_title"
          placeholder="Profile Title"
        />
        <input
          type="string"
          ref={bioRef}
          name="bio"
          id="bio"
          placeholder="Bio"
        />
        <input
          type="text"
          ref={bg_colorRef}
          name="bg_color"
          id="bg_color"
          placeholder="bg_color"
        />
        <input
          type="text"
          ref={bg_image_urlRef}
          name="bg_image_url"
          id="bg_image_url"
          placeholder="bg_image_url"
        />
        <input
          type="file"
          id="picture"
          ref={pictureRef}
          name="picture"
          accept="image/*"
          onChange={handleChange}
        />
        <input type="submit" id="submit" value="Save" />
      </form>
    </>
  );
};

export default Attachment;

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
