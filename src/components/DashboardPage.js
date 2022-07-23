import React, { useEffect, useState } from "react";
import LinkEditor from "./LinkEditor";
import Preview from "./Preview";
import { Container } from "@mui/material";
import { deleteLink, getLinks, saveLink } from "../services/linksServices";
import { useGlobalState } from "../utils/stateContext";
import { useLocation } from "react-router-dom";
import AppearanceEditor from "./AppearanceEditor";
import styles from "./DashboardPage.module.css";

const DashboardPage = () => {
  console.log("Dashboard");
  let location = useLocation();

  console.log(location);
  const { store } = useGlobalState();
  const { token, currentUserId, loggedInUser } = store;

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
    console.log("currentUserId", currentUserId);
    console.log("loggedInUser", loggedInUser);

    link.user_id = currentUserId;
    console.log("assign the currentUserId", link.user_id);
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
    setLinks((links) =>
      links.map((item) => (item.id === link.id ? link : item))
    );
    saveLink(link).then((response) => {
      console.log(response);
    });
  };

  const handleDelete = (id) => {
    console.log("delete triggered - DashboardPage");
    console.log("id", id);
    setLinks((links) => links.filter((link) => link.id !== id));
    deleteLink(id).then(() => window.location.reload());
  };

  return (
    // <Container
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    //     marginTop: "2rem",
    //   }}
    // >
    <section className={styles.dashboard}>
      {location.pathname === "/dashboard" && (
        <LinkEditor
          links={links}
          onSave={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
      {location.pathname === "/dashboard/appearance" && <AppearanceEditor />}
      <div className={styles.preview}>
        <Preview links={links} />
      </div>
      {/* </Container> */}
    </section>
  );
};

export default DashboardPage;
