"use client";
import React from "react";
import { Tooltip } from "@mui/material";
import { DEV_UNDER_PROCESS } from "../../constants/index";
import Image from "next/image";

interface CustomIconProps {
  id: string;
  isAvailable: boolean;
  icon: string;
  customStyles?: {
    [key: string]: any;
  };
  OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  OnClick,
  id,
  icon,
  isAvailable,
  customStyles,
}) => {
  const Styles: React.CSSProperties = {
    backgroundColor: customStyles?.backgroundColor
      ? customStyles.backgroundColor
      : "#A0DBEB",
    borderRadius: "4px",
    height: customStyles?.height ? customStyles.height : "40px",
    width: customStyles?.width ? customStyles.width : "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    outline: "none",
    flexShrink: 0,
    ...customStyles,
  };

  return (
    <>
      <Tooltip title={isAvailable ? "" : DEV_UNDER_PROCESS} arrow>
        <button style={Styles} onClick={OnClick}>
          <Image src={icon} width={22} height={22} alt={`${id}-icon`} />
        </button>
      </Tooltip>
    </>
  );
};

export default CustomIcon;
