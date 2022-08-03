import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkEditor from "./editors/LinkEditor";
import AppearanceEditor from "./editors/AppearanceEditor";
import Preview from "./preview/Preview";
import axios from 'axios';
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

  const [image, setImage] = useState(null);

// use unsplash api
  const fetchAPI = async () => {
      // access key to unsplash api
      const response = await axios.get('https://api.unsplash.com/photos/?client_id=TXaG_nMau4rphryLFAF6wEefIo5JucV-qEOf5Yw4Q9Y');
      const img = response.data[0];
      setImage(img.urls.thumb);
      // const data = await response.data;
  }

  const handleImageHChange = (event) => {
    dispatch(event.target.src)
  }


  return (
    <section className={styles.container}>
      <Navbar />
      <section className={styles.dashboard}>
        {location.pathname === "/dashboard" && <LinkEditor />}
        {location.pathname === "/dashboard/appearance" && <AppearanceEditor images={images} onClick={onClick} fetchAPI={fetchAPI} />}

        <div className={styles.modal}>
          <Button sx={{ backgroundColor: "white" }} onClick={handleOpen}>
            {!open ? "Preview" : "Close"}
          </Button>
        </div>
        {open ? displayModal() : <Preview image={image} />}
      </section>
    </section>
  );
};

export default DashboardPage;
