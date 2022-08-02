import React from "react";
import styles from "./Preview.module.css";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import YouriLink from "./YouriLink";

const Preview = ({ show }) => {
  console.log("Preview");
  console.log(window.screen.width);

  return (
    <div className={`${styles.preview} ${show && styles.show}`}>
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
                <YouriLink />
              </CacheProvider>
            );
          }}
        </FrameContextConsumer>
      </Frame>
    </div>
  );
};

export default Preview;
