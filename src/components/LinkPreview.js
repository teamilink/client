import React, { useState } from "react";
import { deleteLink } from "../services/linksServices";
import LinkForm from "./LinkForm";

const LinkPreview = ({ onUpdate, onDelete, ...link }) => {
  const [isEditMode, setIseEditMode] = useState(false);

  const toggleEdit = () => {
    console.log("clicked - edit");
    setIseEditMode(!isEditMode);
  };
  const handleDelete = () => {
    console.log("clicked - delete");
    const confirm = window.confirm(
      `Are you sure you wish to delete "${link.title}"?`
    );
    if (confirm) {
      deleteLink(link.id).then(() => {
        onDelete(link.id);
      });
    }
  };

  return (
    <div>
      {isEditMode ? (
        <LinkForm link={link} onSave={onUpdate} onCancel={toggleEdit} />
      ) : (
        <>
          <div className="edit-button">
            <button type="button" className="edit" onClick={toggleEdit}>
              Edit
            </button>
            <button type="button" className="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className="link-card">
            <a href={link.link_address} target="_blank" rel="noreferrer">
              <h4>{link.title}</h4>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default LinkPreview;
