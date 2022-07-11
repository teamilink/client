import React, { useState } from "react";

const LinkForm = () => {
  const initialFormState = {
    title: "",
    linkAddress: "",
  };

  const [switchBtn, setSwitchBtn] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  // toggle the switch
  const handleSwitchBtn = () => {
    setSwitchBtn(!switchBtn);
  };

  const clearForm = () => {
    setFormData(initialFormState);
  };

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
    // POST the data
  };
  return (
    <>
      <button onClick={handleSwitchBtn}>
        {switchBtn ? "Inactive" : "Active"}
      </button>
      <button onClick={clearForm}>Clear</button>
      <form onSubmit={handleSubmit} className="link-form">
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Link title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={switchBtn ? false : true}
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
            disabled={switchBtn ? false : true}
          />
        </div>
        <div>{/* <input type="submit" /> */}</div>
      </form>
      {/* display */}
      <div>
        <a
          href={formData.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
        >
          {formData.title}
        </a>
      </div>
    </>
  );
};

export default LinkForm;
