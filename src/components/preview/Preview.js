import React from "react";
import ReactDOMServer from "react-dom/server";
import { useGlobalState } from "../../utils/stateContext";
import Card from "./Card";
import styles from "./Preview.module.css";
// import Card from "./Card";

const Preview = ({ links, appearance }) => {
  console.log("Preview");
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  return (
    <section className={styles.preview}>
      {/* <Card links={links} appearance={appearance} /> */}
      <iframe
        className={styles.frame}
        // src={`http://localhost:3000/${loggedInUser}`}
        srcDoc={ReactDOMServer.renderToString(
          <Card links={links} appearance={appearance} />
        )}
        title="preview"
        frameBorder="0"
        allowFullScreen
      >
        {/* <Card links={links} appearance={appearance} /> */}
      </iframe>
    </section>
  );
};

export default Preview;
