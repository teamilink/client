import React, { useState } from "react";
import LinkFormList from "./LinkFormList";
import Preview from "./Preview";
// import { LinkContext } from "../utils/LinkContext";
// import LinkForm from "./LinkForm";

const DashboardPage = () => {
  const [links, setLinks] = useState([]);

  const handleSubmit = (link) => {
    console.log("submit clicked! - top");
    setLinks([...links, link]);
    console.log(links);
  };

  const handleUpdate = (link) => {
    console.log("eidt triggered");
    setLinks((prevState) =>
      prevState.map((c) => (c.id === link.id ? link : c))
    );
    console.log(links);
  };

  const handleDelete = (id) => {
    console.log("delete triggered");
    setLinks((prevState) => prevState.filter((c) => c.id !== id));
  };

  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      <LinkFormList
        links={links}
        onSave={handleSubmit}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <Preview links={links} />
    </div>
  );
};

export default DashboardPage;
