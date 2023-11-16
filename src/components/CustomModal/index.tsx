"use client";
import { Box, Modal } from "@mui/material";
import React from "react";

interface ModalProps {
  isBackgroundGray: boolean;
  customStyles?: {
    [key: string]: string;
  };
  id: string;
  open: boolean;
  children?: React.ReactNode;
  onclose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomModal: React.FC<ModalProps> = ({
  id,
  open,
  children,
  customStyles,
  onclose,
  isBackgroundGray = true,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onclose}
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: isBackgroundGray
                ? "background.paper'"
                : "transparent",
            },
          },
        }}
      >
        <Box
          sx={{
            position: customStyles?.position
              ? customStyles.position
              : "absolute",
            top: customStyles?.top ? customStyles.top : "50%",
            left: customStyles?.left ? customStyles.left : "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: customStyles?.backgroundColor
              ? customStyles?.backgroundColor
              : "#FFF",
            border: customStyles?.border
              ? customStyles.border
              : "1px solid black",
            borderRadius: customStyles?.borderRadius
              ? customStyles?.borderRadius
              : "10px",
            padding: customStyles?.padding ? customStyles?.padding : "4px",
            width: customStyles?.width ? customStyles?.width : "464px",
            height: customStyles?.height ? customStyles?.height : "320px",
            opacity:1,
            ...customStyles,
          }}
          id={id}
        >
          {children}
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
