import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "../../services/linksServices";
// import Card from "./Card";
import CardCopy from "./CardCopy";
import styles from "./YouriLink.module.css";

const YouriLink = () => {
  const { username } = useParams();
  console.log(username);
  const location = useLocation();
  console.log(typeof location.pathname);

  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    location.pathname !== "/dashboard" &&
      getData(username)
        .then((data) => {
          console.log(data);
          setApiData(data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
  }, [username]);

  const setTheme = (theme) => {
    switch (theme) {
      case "light":
        return `${styles.light}`;
      case "dark":
        return `${styles.dark}`;
      case "colourful":
        return `${styles.colourful}`;
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
          <CardCopy links={apiData.links} appearance={apiData.appearance} />
        </section>
      )}
    </>
  );
};

export default YouriLink;
