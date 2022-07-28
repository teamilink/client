import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "../../services/linksServices";
import Card from "./Card";
import styles from "./YouriLink.module.css";
import Footer from "../Footer";

const YouriLink = () => {
  const { username } = useParams();
  console.log(username);
  const location = useLocation();
  console.log(typeof location.pathname);

  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(null);
  // if location.pathname === /dashboard => false
  // if location.pathname === /:username => true
  const [visitor, setVisitor] = useState(true);

  useEffect(() => {
    location.pathname === "/dashboard" ? setVisitor(false) : setVisitor(true);
  }, [location.pathname]);

  useEffect(() => {
    visitor &&
      getData(username)
        .then((data) => {
          console.log(data);
          setApiData(data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
  }, [visitor, username]);

  const setTheme = (theme) => {
    switch (theme) {
      case "light":
        return `${styles.light}`;
      case "dark":
        return `${styles.dark}`;
      case "colourful":
        return `${styles.colourful}`;
      case "pink":
        return `${styles.pink}`;
      case "blue":
        return `${styles.blue}`;
      case "green":
        return `${styles.green}`;
      case undefined:
        return `${styles.light}`;
      default:
        throw Error(`unknown theme ${theme}`);
    }
  };

  return (
    <>
      {loading ? (
        <h1> this is loading </h1>
      ) : (
        <section
          className={`${styles.container} ${setTheme(
            apiData.appearance.bg_color
          )}`}
        >
          <Card
            links={apiData.links}
            appearance={apiData.appearance}
            visitor={visitor}
          />
        </section>
      )}
      <Footer />
    </>
  );
};

export default YouriLink;
