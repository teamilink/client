import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ links }) => {
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

  const [bio, setBio] = useState(testBio || {});

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
            <a
              key={link.id}
              href={link.link_address}
              target="_blank"
              rel="noreferrer"
            >
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
