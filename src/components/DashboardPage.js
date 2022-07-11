import React, { useState } from "react";
import LinkFormList from "./LinkFormList";
import Preview from "./Preview";
import { LinkContext } from "../utils/LinkContext";

const DashboardPage = () => {
  const initialFormState = [
    {
      title: "",
      linkAddress: "",
    },
  ];

  const [formData, setFormData] = useState(initialFormState);

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
