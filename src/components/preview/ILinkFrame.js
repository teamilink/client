import React from "react";
import YouriLink from "./YouriLink";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import styles from "./ILinkFrame.module.css";

const ILinkFrame = () => (
  <Frame
    head={[<link type="text/css" rel="stylesheet" href="Card.module.css" />]}
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
);

export default ILinkFrame;
