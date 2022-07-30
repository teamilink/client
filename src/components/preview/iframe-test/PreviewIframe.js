import React, { useContext, useRef } from "react";
// import ReactDOMServer from "react-dom/server";
import { useGlobalState } from "../../../utils/stateContext";
// import Card from "./Card";
import styles from "../Preview.module.css";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import YouriLinkMui from "../YouriLinkMui";
// import CardMui from "./CardMui";
// import YouriLink from "../YouriLink";
// import { StyleSheetManager } from "styled-components";

const Preview = ({ links, appearance }) => {
  console.log("Preview");
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  const iframeRef = useRef();
  console.log("*********** iframe **************");
  console.log(iframeRef);

  return (
    <section className={styles.preview}>
      <Frame
        head={[
          <link type="text/css" rel="stylesheet" href="Card.module.css" />,
        ]}
        className={styles.frame}
      >
        <FrameContextConsumer>
          {({ document }) => {
            const cache = createCache({
              key: "head",
              container: document.head,
            });
            return (
              <CacheProvider value={cache}>
                {/* <YouriLink /> */}
                <YouriLinkMui />
                {/* <CardMui /> */}
              </CacheProvider>
            );
          }}
        </FrameContextConsumer>
      </Frame>
    </section>
  );
};

export default Preview;

function noname() {
  return {
    /* <Frame
        head={[
          <link type="text/css" rel="stylesheet" href="Card.module.css" />,
        ]}
        className={styles.frame}
      >
        <FrameContext>
          {({ document }) => {
            return <Card links={links} appearance={appearance} />;
          }}
        </FrameContext>
      </Frame> */
    /* <iframe
        className={styles.frame}
        // src={`http://localhost:3000/${loggedInUser}`}
        srcDoc={ReactDOMServer.renderToString(
          <Card links={links} appearance={appearance} />
        )}
        title="preview"
        frameBorder="0"
        allowFullScreen
      >*/
    /* </iframe>  */
  };
  // </section>
}
