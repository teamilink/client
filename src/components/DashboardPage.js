import React, { useState } from "react";
import LinkFormList from "./LinkFormList";
import Preview from "./Preview";

const DashboardPage = () => {
  const [links, setLinks] = useState([]);

  const handleSubmit = (link) => {
    console.log("submit triggered - DashboardPage");
    setLinks([...links, link]);
  };

  const handleUpdate = (link) => {
    console.log("eidt triggered - DashboardPage");
    setLinks((prevState) =>
      prevState.map((c) => (c.id === link.id ? link : c))
    );
  };

  const handleDelete = (id) => {
    console.log("delete triggered - DashboardPage");
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
