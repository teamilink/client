import { Box, Button, Container } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

const CardMui = ({ links, appearance, visitor }) => {
  console.log(appearance);
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img
          alt="profile"
          src={appearance.picture_url ? appearance.picture_url : ""}
          className={styles.profile}
        />
        <div className={styles.text}>
          <h1 className={styles.title}>{appearance.profile_title}</h1>
          <p className={styles.bio}>{appearance.bio}</p>
        </div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {links &&
            links.map((link) => (
              <a
                key={link.id}
                href={link.link_address}
                target="_blank"
                rel="noreferrer"
              >
                <Button className={styles.btn} key={link.id}>
                  {link.title}
                </Button>
              </a>
            ))}
        </Box>
      </Box>
    </Container>
  );
};

export default CardMui;
