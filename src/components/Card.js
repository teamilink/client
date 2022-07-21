import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

const Card = () => {
  // user.id -> links = [] << link_ids
  // user.id -> appearance = {profile_title, bio, img_url, bg_color, bg_img_url}
  const testLinks = [
    {
      id: 1,
      title: "First Link",
      link_address: "https://google.com",
    },
    {
      id: 2,
      title: "Second Link",
      link_address: "https://google.com",
    },
    {
      id: 3,
      title: "Third Link",
      link_address: "https://google.com",
    },
  ];

  const testBio = {
    username: "coderAcademy",
    profile_title: "Coder Academy",
    bio: "Accelerated-learning bootcamps to help people transform careers at pace",
    img_url: null,
    bg_color: null,
    bg_img_url: null,
  };

  const [links, setLinks] = useState(testLinks || []);
  const [bio, setBio] = useState(testBio || {});

  // useEffect(() => {
  // }, [links, bio])

  return (
    <div className={styles.cardContainer}>
      <img
        alt="profile"
        src="/images/profile_default.jpeg"
        className={styles.profile}
      />
      <h1 className={styles.title}>{bio.profile_title}</h1>
      <p className={styles.bio}>{bio.bio}</p>
      <div className={styles.linkButtons}>
        {links &&
          links.map((link) => (
            <a href={link.link_address} target="_blank" rel="noreferrer">
              <button className={styles.btn} key={link.id}>
                {link.title}
              </button>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Card;
