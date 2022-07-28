import React from "react";
import styles from "./Card.module.css";

const Card = ({ links, appearance, visitor }) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.card} ${visitor && styles.organiser}`}>
        <img
          alt="profile"
          src={appearance.picture_url}
          className={styles.profile}
        />
        <div className={styles.text}>
          <h1 className={styles.title}>{appearance.profile_title}</h1>
          <p className={styles.bio}>{appearance.bio}</p>
        </div>
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
    </section>
  );
};

export default Card;
