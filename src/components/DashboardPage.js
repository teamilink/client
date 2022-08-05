import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import PreviewDefault from "./preview/PreviewDefault";
import PreviewModal from "./preview/PreviewModal";
import styles from "./DashboardPage.module.css";
import NavbarExtra from "./navbar/NavbarExtra";
import { Button } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { saveAppearance } from "../services/appearanceServices";

const DashboardPage = () => {
  let location = useLocation();
  const { store, dispatch } = useGlobalState();
  const { appearance, currentUserId } = store;

  // control modal for mobile view
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    // send a request to the server
    const formData = appendFormData();
    saveAppearance(formData, appearance.id).then((result) => {
      dispatch({
        type: "setAppearance",
        data: result,
      });
    });
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  // to handle Preview button, which triggers GET request on mobile view
  // handleOpenModal() need to send a POST request to save the changes
  const [picture, setPicture] = useState("");
  const appendFormData = () => {
    // create FormData to send the data including a file
    const data = new FormData();
    data.append("appearance[profile_title]", appearance.profile_title);
    data.append("appearance[bio]", appearance.bio);
    data.append("appearance[bg_color]", appearance.bg_color);
    data.append("appearance[picture]", picture);
    data.append("appearance[user_id]", currentUserId);
    data.append("appearance[img_timestamp]", appearance.img_timestamp);
    data.append("appearance[pic_timestamp]", appearance.pic_timestamp);
    // only add bg_image_url when it has value
    // otherwise null/undefined become "null"/"undefined"
    appearance.bg_image_url &&
      data.append("appearance[bg_image_url]", appearance.bg_image_url);
    return data;
  };

  return (
    <section className={styles.container}>
      <NavbarExtra />
      <section className={styles.dashboard}>
        {location.pathname === "/dashboard" && <LinkEditor />}
        {location.pathname === "/dashboard/appearance" && (
          <AppearanceEditor
            appendFormData={appendFormData}
            handlePicture={setPicture}
            picture={picture}
          />
        )}

        <div className={styles.modal}>
          <Button sx={{ backgroundColor: "white" }} onClick={handleOpenModal}>
            {!openModal ? "Preview" : null}
          </Button>
          <p>Save before preview!</p>
        </div>

        {openModal ? (
          <PreviewModal openModal={openModal} handleClose={handleClose} />
        ) : (
          <PreviewDefault />
        )}
      </section>
    </section>
  );
};

export default DashboardPage;
