import React from "react";
import { Modal, Box} from "@mui/material";

const ModalComponent = ({className, aria_label, children, open, handleCloseModal, handleOpenModal}) => {

  return (
    <Modal
      className={className}
      open={open}
      onClose={handleCloseModal}
      aria-label={aria_label}
    >
      <Box className="modal__content">
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
