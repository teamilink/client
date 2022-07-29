import React from "react";
import { useGlobalState } from "../../utils/stateContext";
import styles from "./Card.module.css";

const Card = ({ visitor }) => {
  const { store } = useGlobalState();
  const { links, appearance, loggedInUser } = store;
  console.log("card links", links);
  console.log("card appearance", appearance);

  return (
    <section className={styles.container}>
      <div className={`${styles.card} ${visitor && styles.organiser}`}>
        {appearance && appearance.picture_url ? (
          <img
            alt="profile"
            src={appearance.picture_url}
            className={styles.profile}
          />
        ) : (
          <div className={styles.letter_profile}>
            {loggedInUser ? loggedInUser.charAt(0).toUpperCase() : "A"}
          </div>
        )}
        <div className={styles.text}>
          <h1 className={styles.title}>
            {appearance && appearance.profile_title}
          </h1>
          <p className={styles.bio}>{appearance && appearance.bio}</p>
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
