import React from "react";
import styles from "./Preview.module.css";

import { Modal } from "@mui/material";
import PreviewFrame from "./PreviewFrame";

const PreviewModal = ({ openModal, handleClose }) => {
  console.log("Preview");

  const closeWindow = () => {
    handleClose();
  };

  return (
    <div className={styles.preview}>
      {openModal && (
        <Modal open={openModal} onClose={closeWindow}>
          <PreviewFrame openModal={openModal} />
        </Modal>
      )}
    </div>
  );
};

export default PreviewModal;
