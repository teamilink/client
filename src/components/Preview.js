import React, { useState } from "react";

const Preview = ({ links }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Preview</h1>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.link_address}
          target="_blank"
          rel="noreferrer"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Preview;
