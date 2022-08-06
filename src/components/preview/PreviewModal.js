import React from "react";
import ILinkFrame from "./ILinkFrame";
import { Modal } from "@mui/material";
import styles from "./Preview.module.css";

const PreviewModal = ({ openModal, handleClose }) => {
  const closeWindow = () => {
    handleClose();
  };

  return (
    <div className={styles.preview}>
      {openModal && (
        <Modal open={openModal} onClose={closeWindow}>
          <ILinkFrame />
        </Modal>
      )}
    </div>
  );
};

export default PreviewModal;
