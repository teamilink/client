import { Container } from "@mui/material";
// import { display, flex, flexDirection } from "@mui/system";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkFormList from "./LinkFormList";
import Preview from "./Preview";

const DashboardPage = () => {
  console.log("Dashboard");
  const location = useLocation();
  console.log(location.state);

  // links state accumulates each link created by each user
  // and it will controll the preview
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
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "2rem",
      }}
    >
      <LinkFormList
        links={links}
        onSave={handleSubmit}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <Preview links={links} />
    </Container>
  );
};

export default DashboardPage;
