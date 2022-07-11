import React, { useState } from "react";

const LinkForm = () => {
  const initialFormState = {
    title: "",
    linkAddress: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    console.log(formData);
    console.log("works!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Link title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="linkAddress">Link Address: </label>
        <input
          type="text"
          name="linkAddress"
          // defaultValue="https://"
          placeholder="Link Address"
          value={formData.linkAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LinkForm;
