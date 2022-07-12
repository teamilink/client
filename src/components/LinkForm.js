import React, { useState } from "react";
import { useGlobalState } from "../utils/LinkContext";

const LinkForm = ({ index }) => {
  // const { formData, setFormData } = useGlobalState();
  // const { title, linkAddress } = formData;

  const [switchBtn, setSwitchBtn] = useState(false);
  const initialEachFormState = [
    {
      id: 0,
      title: "",
      linkAddress: "",
    },
    {
      id: 1,
      title: "",
      linkAddress: "",
    },
    {
      id: 2,
      title: "",
      linkAddress: "",
    },
    // {
    //   0: {
    //     title: "",
    //     linkAddress: "",
    //   },
    // },
    // {
    //   1: {
    //     title: "",
    //     linkAddress: "",
    //   },
    // },
    // {
    //   2: {
    //     title: "",
    //     linkAddress: "",
    //   },
    // },
    // {
    //   [`${index === 0 && 0}`]: {
    //     title: "",
    //     linkAddress: "",
    //   },
    // },
    // {
    //   [`${index === 1 && 1}`]: {
    //     title: "",
    //     linkAddress: "",
    //   },
    // },
    // {
    //   [`${index === 2 && 2}`]: {
    //     title: "",
    //     linkAddress: "",
    //   },
    // },
  ];

  const [eachFormData, setEachFormData] = useState(initialEachFormState);

  // toggle the switch
  const handleSwitchBtn = () => {
    setSwitchBtn(!switchBtn);
  };

  const clearForm = () => {
    setEachFormData(initialEachFormState);
  };

  const handleChange = (e) => {
    // const inputName = e.target.name.slice(0, -1);
    const inputIndex = parseInt(e.target.name.slice(-1));

    // let wholeFormData = [...eachFormData];
    // let aFormData = { ...wholeFormData[index], [inputName]: e.target.value };
    // wholeFormData[index] = aFormData;

    // setEachFormData({
    //   ...eachFormData,
    //   [inputName]: e.target.value,
    // });
    console.log(eachFormData);

    // const updateState =
    //   Array.isArray(eachFormData) &&
    //   eachFormData.map((eachForm) => {
    //     if (eachForm.id === inputIndex) {
    //       return { ...eachForm, [e.target.name.slice(0, -1)]: e.target.value };
    //     }
    //     return eachForm;
    //   });

    // console.log(updateState);

    setEachFormData(
      eachFormData.map((eachForm) => {
        if (eachForm.id === inputIndex) {
          return { ...eachForm, [e.target.name.slice(0, -1)]: e.target.value };
        }
        return eachForm;
      })
    );
  };

  const handleSubmit = (e) => {
    console.log("submitted");

    e.preventDefault();
    // POST the data
  };
  return (
    <div style={{ padding: "1rem" }} id={`input${index}`}>
      <button onClick={handleSwitchBtn}>
        {switchBtn ? "Inactive" : "Active"}
      </button>
      <button onClick={clearForm}>Clear</button>
      <form onSubmit={handleSubmit} className="link-form">
        <div>
          <label htmlFor={`title${index}`}>Title: </label>
          <input
            type="text"
            name={`title${index}`}
            id={`title${index}`}
            // placeholder={title ? title : "Link title"}
            // value={eachFormData[index].title}
            onChange={handleChange}
            required
            disabled={switchBtn ? false : true}
          />
        </div>
        <div>
          <label htmlFor={`linkAddress${index}`}>Link Address: </label>
          <input
            type="text"
            name={`linkAddress${index}`}
            // defaultValue="https://"
            placeholder="Link Address"
            // value={eachFormData[index][`${index}`].linkAddress}
            onChange={handleChange}
            required
            disabled={switchBtn ? false : true}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LinkForm;
