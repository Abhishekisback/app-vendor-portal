"use client";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import closeIcon from "../../assets/Reusable-components/closeIcon.svg";
import CustomIcons from "../CustomIcon";

interface ModalProps {
  customStyles?:{
    [key:string]:any;
  }  
  id: string;
  open: boolean;
  children?: React.ReactNode;
  onclose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomModal: React.FC<ModalProps> = ({ id, open, children,customStyles, onclose }) => {

  const Styles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: customStyles?.backgroundColor? customStyles?.backgroundColor : "#FFF",
    border: "none",
    borderRadius: customStyles?.borderRadius? customStyles?.borderRadius :"10px",
    padding:customStyles?.padding? customStyles?.padding : "4px",
    width: customStyles?.width? customStyles?.width :"464px",
    height: customStyles?.height? customStyles?.height :"320px",
    ...customStyles
  };

  return (
    <>
      <Modal open={open} onClose={onclose}>
        <div style={Styles} id={id}>
          {children}
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
