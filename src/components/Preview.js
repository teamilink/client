import React from "react";
import { useGlobalState } from "../utils/LinkContext";

const Preview = () => {
  const { formData } = useGlobalState();

  return (
    <section>
      <h1>Preview</h1>
      <div>
        <a
          href={formData.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          {formData.title}
        </a>
      </div>
    </section>
  );
};

export default Preview;
