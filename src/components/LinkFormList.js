import React from "react";
import LinkForm from "./LinkForm";
import LinkPreview from "./LinkPreview";

const LinkFormList = ({ links, onSave, onUpdate, onDelete }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LinkForm onSave={onSave} />
      {links.map((link) => (
        <LinkPreview
          key={link.id}
          {...link}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default LinkFormList;
