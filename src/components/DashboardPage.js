import React, { useEffect, useState } from "react";
import LinkFormList from "./LinkFormList";
import Preview from "./Preview";
import { LinkContext } from "../utils/LinkContext";
import LinkForm from "./LinkForm";

const DashboardPage = () => {
  const initialFormState = [
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
