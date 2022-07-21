import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Editor from "./Editor";
import Preview from "./Preview";
import { Container } from "@mui/material";
import { deleteLink, getLinks, saveLink } from "../services/linksServices";
import { useGlobalState } from "../utils/stateContext";

const DashboardPage = () => {
  console.log("Dashboard");
  // const location = useLocation();
  // console.log(location.state);

  const { store } = useGlobalState();
  const { token, currentUserId } = store;

  // links state accumulates each link created by each user
  // and it will controll the preview
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks(token) //
      .then((data) => {
        setLinks(data);
        console.log(data);
      });
  }, [token]);

  const handleAdd = (link) => {
    console.log("submit triggered - DashboardPage");
    link.user_id = currentUserId;

    console.log("link data", link);

    // saveLink in services will post this data to the DB
    // then store them in links state in DashboardPage
    saveLink(link).then((response) => {
      console.log(response);
      setLinks([...links, response]);
    });
  };

  const handleUpdate = (link) => {
    console.log("eidt triggered - DashboardPage");
    setLinks((prevState) =>
      prevState.map((c) => (c.id === link.id ? link : c))
    );

    saveLink(link).then((response) => {
      console.log(response);
    });
  };

  const handleDelete = (id) => {
    console.log("delete triggered - DashboardPage");
    console.log("id", id);
    deleteLink(id);
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
      <Editor
        links={links}
        onSave={handleAdd}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <Preview links={links} />
    </Container>
  );
};

export default DashboardPage;
