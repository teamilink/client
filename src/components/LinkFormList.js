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
      {/* {links.length === 0 ? (
        <LinkForm onAdd={onAdd} />
      ) : (
        links.map((link, key) => (
          <LinkForm link={link} onAdd={onAdd} key={key} />
        ))
      )} */}
    </div>
  );
};

export default LinkFormList;
