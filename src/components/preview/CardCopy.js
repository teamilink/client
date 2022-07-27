import React from "react";
import styles from "./CardCopy.module.css";
import YouriLink from "./YouriLink";

const CardCopy = ({ links, appearance }) => {
  // const setTheme = (theme) => {
  //   switch (theme) {
  //     case "light":
  //       return `${styles.light}`;
  //     case "dark":
  //       return `${styles.dark}`;
  //     case "colourful":
  //       return `${styles.colourful}`;
  //     case undefined:
  //       return `${styles.light}`;
  //     default:
  //       throw Error(`unknown theme ${theme}`);
  //   }
  // };

  return (
    <div className={`${styles.cardContainer}`}>
      <img
        alt="profile"
        src={appearance.picture_url}
        className={styles.profile}
      />
      <h1 className={styles.title}>{appearance.profile_title}</h1>
      <p className={styles.bio}>{appearance.bio}</p>
      <p className={styles.bg_color}>{appearance.bg_color}</p>
      <p className={styles.bg_image_url}>{appearance.bg_image_url}</p>
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

export default CardCopy;
