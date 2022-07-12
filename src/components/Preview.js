import React, { useState } from "react";
import { useGlobalState } from "../utils/LinkContext";

const Preview = () => {
  const { formData } = useGlobalState();
  const [loading, setLoading] = useState(false);

  const savedData = () => {
    // if the input data is successfully saved
    setLoading(!loading);
  };

  return (
    <section>
      <h1>Preview</h1>
      {loading && "loading..."}
      <div>
        <a
          href={formData.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* {formData.map((data) => data.title)} */}
        </a>
      </div>
    </section>
  );
};

export default Preview;
