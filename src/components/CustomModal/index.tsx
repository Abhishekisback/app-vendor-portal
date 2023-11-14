"use client";
import { Modal } from "@mui/material";
import React from "react";

interface ModalProps {
  isBackgroundGray: boolean;
  customStyles?: {
    [key: string]: any;
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
  const Styles: React.CSSProperties = {
    position: customStyles?.position ? customStyles.position : "absolute",
    top: customStyles?.top ? customStyles.top : "50%",
    left: customStyles?.left ? customStyles.left : "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: customStyles?.backgroundColor
      ? customStyles?.backgroundColor
      : "#FFF",
    border: customStyles?.border ? customStyles.border : "1px solid black",
    borderRadius: customStyles?.borderRadius
      ? customStyles?.borderRadius
      : "10px",
    padding: customStyles?.padding ? customStyles?.padding : "4px",
    width: customStyles?.width ? customStyles?.width : "464px",
    height: customStyles?.height ? customStyles?.height : "320px",
    ...customStyles,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onclose}
        BackdropProps={{
          style: {
            backgroundColor: isBackgroundGray
              ? "background.paper'"
              : "transparent",
          },
        }}
      >
        <div style={Styles} id={id}>
          {children}
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
