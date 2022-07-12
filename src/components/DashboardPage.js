import React, { useEffect, useState } from "react";
import LinkFormList from "./LinkFormList";
import Preview from "./Preview";
import { LinkContext } from "../utils/LinkContext";
import LinkForm from "./LinkForm";

const DashboardPage = () => {
  // const initialFormState = {
  //   form1: {
  //     title: "",
  //     linkAddress: "",
  //   },
  //   form2: {
  //     title: "",
  //     linkAddress: "",
  //   },
  //   form3: {
  //     title: "",
  //     linkAddress: "",
  //   },
  // };

  const initialFormState = [
    {
      title: "",
      linkAddress: "",
    },
    {
      title: "",
      linkAddress: "",
    },
    {
      title: "",
      linkAddress: "",
    },
  ];

  const [formData, setFormData] = useState(initialFormState);

  // useEffect(() => {
  //   const baseUrl = "http://localhost:4000/dashboard";
  //   fetch(baseUrl)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <LinkContext.Provider value={{ formData, setFormData, initialFormState }}>
      <section className="wrapper" style={{ display: "flex" }}>
        <LinkFormList />
        <Preview />
      </section>
    </LinkContext.Provider>
  );
};

export default DashboardPage;
