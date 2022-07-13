import React, { useState } from "react";
import { saveLink } from "../services/linksServices";

const LinkForm = ({ link, onSave, onCancel }) => {
  const id = link && link.id ? link.id : undefined;

  const [title, setTitle] = useState(id ? link.title : "");
  const [link_address, setLinkAddress] = useState(id ? link.link_address : "");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("clicked onSubmit");

    saveLink({ title, link_address, id }).then((link) => {
      console.log(link);
      onSave(link);
      clearForm();
    });
  };

  const clearForm = () => {
    setTitle("");
    setLinkAddress("");
    onCancel();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddressChange = (event) => {
    setLinkAddress(event.target.value);
  };

  return (
    <>
      <form id="link-form" onSubmit={onSubmit} onReset={clearForm}>
        <div id="link-form-title">
          <label htmlFor={`title_${id ? id : "new"}`}>Link Title:</label>
          <input
            type="text"
            id={`title_${id ? id : "new"}`}
            name={`title_${id ? id : "new"}`}
            value={title}
            placeholder="Link Title"
            onChange={handleTitleChange}
          />
        </div>
        <div id="link-form-address">
          <label htmlFor={`link_address_${id ? id : "new"}`}>
            Link Address:
          </label>
          <input
            type="text"
            id={`link_address_${id ? id : "new"}`}
            name={`link_address_${id ? id : "new"}`}
            placeholder="Link Address"
            value={link_address}
            onChange={handleAddressChange}
          />
        </div>
        <div id="link-form-submit">
          <button type="submit">Save</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
      <a href={link_address} target="_blank" rel="noreferrer">
        <h4>{title}</h4>
      </a>
    </>
  );
};

export default LinkForm;
