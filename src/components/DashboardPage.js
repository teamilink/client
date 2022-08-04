import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import Preview from "./preview/Preview";
import PreviewModal from "./preview/PreviewModal";
import styles from "./DashboardPage.module.css";
import NavbarExtra from "./navbar/NavbarExtra";
import { Button } from "@mui/material";

const DashboardPage = () => {
  console.log("Dashboard");
  let location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [image, setImage] = useState(null);

  const API_KEY = REACT_APP_API_KEY
// use unsplash api
  const fetchAPI = async () => {
      // access key to unsplash api
      const response = await axios.get('https://api.unsplash.com/photos/?client_id=API_KEY');
      const img = response.data[0];
      setImage(img.urls.thumb);
      // const data = await response.data;
  }

  const handleImageHChange = (event) => {
    dispatch(event.target.src)
  }


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
          <Preview />
        )}
      </section>
    </section>
  );
};

export default DashboardPage;
