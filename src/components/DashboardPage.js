import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteLink, saveLink } from "../services/linksServices";
import { saveAppearance } from "../services/appearanceServices";
import { useGlobalState } from "../utils/stateContext";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import Preview from "./preview/Preview";
import Navbar from "./Navbar";
import styles from "./DashboardPage.module.css";

const DashboardPage = (props) => {
  console.log("Dashboard");
  let location = useLocation();
  console.log(location);

  const { store, dispatch } = useGlobalState();
  const { currentUserId, loggedInUser, appearance } = store;
  const [loading, setLoading] = useState(false);

  // links state accumulates each link created by each user
  // and it will controll the preview

  const handleAppearSubmit = (picture) => {
    console.log("handleAppearSubmit clicked!", picture);

    if (appearance.id) {
      saveAppearance(appearance, appearance.id).then((result) => {
        dispatch({
          type: "setAppearance",
          data: result,
        });
      });
    } else {
      const data = new FormData();

      data.append("appearance[profile_title]", appearance.profile_title);
      data.append("appearance[bio]", appearance.bio);
      data.append("appearance[bg_color]", appearance.bg_color);
      data.append("appearance[bg_image_url]", appearance.bg_image_url);
      data.append("appearance[picture]", picture);
      data.append("appearance[user_id]", currentUserId);

      saveAppearance(data, appearance.id).then((result) => {
        dispatch({
          type: "setAppearance",
          data: result,
        });
      });
    }
  };

  const handleAppearChange = (event) => {
    console.log("appearance is chaning...");
    const eventTarget = event.currentTarget;
    dispatch({
      type: "updateAppearance",
      data: eventTarget,
    });

    console.log("check updated appearance", appearance);
    // setAppearance({
    //   ...appearance,
    //   [event.currentTarget.name]: event.currentTarget.value,
    // });
  };

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
      dispatch({
        type: "addLink",
        data: response,
      });
      // setLinks([...links, response]);
    });
  };

  const handleLinkUpdate = (link) => {
    console.log("eidt triggered - DashboardPage");
    dispatch({
      type: "updateLinks",
      data: link,
    });
    // setLinks((links) =>
    //   links.map((item) => (item.id === link.id ? link : item))
    // );
    saveLink(link).then((response) => {
      console.log(response);
    });
  };

  const handleLinkDelete = (id) => {
    console.log("delete triggered - DashboardPage");
    console.log("id", id);
    // setLinks((links) => links.filter((link) => link.id !== id));
    deleteLink(id).then(() => {
      dispatch({
        type: "removeLink",
        data: id,
      });
      window.location.reload();
    });
  };

  return (
    <section className={styles.container}>
      <Navbar loggedInUser={loggedInUser} />
      <section className={styles.dashboard}>
        {location.pathname === "/dashboard" && (
          <LinkEditor
            onSave={handleLinkAdd}
            onUpdate={handleLinkUpdate}
            onDelete={handleLinkDelete}
          />
        )}
        {location.pathname === "/dashboard/appearance" && (
          <AppearanceEditor
            handleText={handleAppearChange}
            onSubmit={handleAppearSubmit}
          />
        )}

        <Preview />
      </section>
    </section>
  );
};

export default DashboardPage;
