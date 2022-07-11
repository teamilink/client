import React, { useState } from "react";
import { useGlobalState } from "../utils/LinkContext";

const LinkForm = ({ id }) => {
  const { formData, setFormData } = useGlobalState();
  const { title, linkAddress } = formData;
  const [switchBtn, setSwitchBtn] = useState(false);

  // toggle the switch
  const handleSwitchBtn = () => {
    setSwitchBtn(!switchBtn);
  };

  const clearForm = () => {
    setFormData({
      title: "",
      linkAddress: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <label htmlFor={`title`}>Title: </label>
          <input
            type="text"
            name={`title`}
            placeholder="Link title"
            value={title}
            onChange={handleChange}
            required
            disabled={switchBtn ? false : true}
          />
        </div>
        <div>
          <label htmlFor={`linkAddress`}>Link Address: </label>
          <input
            type="text"
            name={`linkAddress`}
            // defaultValue="https://"
            placeholder="Link Address"
            value={linkAddress}
            onChange={handleChange}
            required
            disabled={switchBtn ? false : true}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default LinkForm;
