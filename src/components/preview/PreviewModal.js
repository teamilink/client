import React from "react";
import styles from "./Preview.module.css";

import { Modal } from "@mui/material";
import ILinkFrame from "./ILinkFrame";

const PreviewModal = ({ openModal, handleClose }) => {
  const closeWindow = () => {
    handleClose();
  };

  return (
    <div className={styles.preview}>
      {openModal && (
        <Modal open={openModal} onClose={closeWindow}>
          <ILinkFrame openModal={openModal} />
        </Modal>
      )}
    </div>
  );
};

export default PreviewModal;
