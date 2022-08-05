import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import PreviewDefault from "./preview/PreviewDefault";
import PreviewModal from "./preview/PreviewModal";
import styles from "./DashboardPage.module.css";
import NavbarExtra from "./navbar/NavbarExtra";
import { Button } from "@mui/material";

const DashboardPage = () => {
  let location = useLocation();

  // control modal for mobile view
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <section className={styles.container}>
      <NavbarExtra />
      <section className={styles.dashboard}>
        {location.pathname === "/dashboard" && <LinkEditor />}
        {location.pathname === "/dashboard/appearance" && <AppearanceEditor />}

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
