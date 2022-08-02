import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import Preview from "./preview/Preview";
import Navbar from "./navbar/Navbar";
import styles from "./DashboardPage.module.css";
import { Button, Modal } from "@mui/material";

const DashboardPage = () => {
  console.log("Dashboard");
  let location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const displayModal = () => (
    <Modal open={open} onClose={handleClose}>
      <Preview show={true} />
    </Modal>
  );

  return (
    <section className={styles.container}>
      <Navbar />
      <section className={styles.dashboard}>
        {location.pathname === "/dashboard" && <LinkEditor />}
        {location.pathname === "/dashboard/appearance" && <AppearanceEditor />}

        <div className={styles.modal}>
          <Button sx={{ backgroundColor: "white" }} onClick={handleOpen}>
            {!open ? "Preview" : "Close"}
          </Button>
        </div>
        {open ? displayModal() : <Preview />}
      </section>
    </section>
  );
};

export default DashboardPage;
