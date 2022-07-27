import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteLink, getDashbaord, saveLink } from "../services/linksServices";
import { saveAppearance } from "../services/appearanceServices";
import { useGlobalState } from "../utils/stateContext";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import Preview from "./preview/Preview";
import Navbar from "./Navbar";
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
  const [appearance, setAppearance] = useState({});

  const handleAppearSubmit = (picture) => {
    console.log("handleAppearSubmit clicked!", picture);

    if (appearance.id) {
      saveAppearance(appearance, appearance.id).then((result) =>
        setAppearance(result)
      );
    } else {
      const data = new FormData();

      data.append("appearance[profile_title]", appearance.profile_title);
      data.append("appearance[bio]", appearance.bio);
      data.append("appearance[bg_color]", appearance.bg_color);
      data.append("appearance[bg_image_url]", appearance.bg_image_url);
      data.append("appearance[picture]", picture);
      data.append("appearance[user_id]", currentUserId);

      saveAppearance(data, appearance.id).then((result) =>
        setAppearance(result)
      );
    }
  };

  const handleAppearChange = (event) => {
    setAppearance({
      ...appearance,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    // if (event.currentTarget.name) {
    //   setAppearance({
    //     ...appearance,
    //     [event.currentTarget.name]: event.currentTarget.value,
    //   });
    // } else if (event.currentTarget.id === "bg_image_url") {
    //   setAppearance({
    //     ...appearance,
    //     [event.currentTarget.id]: Date.now(),
    //   });
    // }
  };

  useEffect(() => {
    getDashbaord(token) //
      .then((data) => {
        setLinks(data.links);
        setAppearance(data.appearance);
        console.log(data);
      });
  }, [token]);

  const handleLinkAdd = (link) => {
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

  const handleLinkUpdate = (link) => {
    console.log("eidt triggered - DashboardPage");
    setLinks((links) =>
      links.map((item) => (item.id === link.id ? link : item))
    );
    saveLink(link).then((response) => {
      console.log(response);
    });
  };

  const handleLinkDelete = (id) => {
    console.log("delete triggered - DashboardPage");
    console.log("id", id);
    setLinks((links) => links.filter((link) => link.id !== id));
    deleteLink(id).then(() => window.location.reload());
  };

  return (
    <section className={styles.container}>
      <Navbar loggedInUser={loggedInUser} />
      <section className={styles.dashboard}>
        {location.pathname === "/dashboard" && (
          <LinkEditor
            links={links}
            onSave={handleLinkAdd}
            onUpdate={handleLinkUpdate}
            onDelete={handleLinkDelete}
          />
        )}
        {location.pathname === "/dashboard/appearance" && (
          <AppearanceEditor
            appearance={appearance}
            handleText={handleAppearChange}
            onSubmit={handleAppearSubmit}
          />
        )}

        <Preview links={links} appearance={appearance} />
      </section>
    </section>
  );
};

export default DashboardPage;
