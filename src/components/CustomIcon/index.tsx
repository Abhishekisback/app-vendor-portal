"use client";
import React from "react";
import { Button, Tooltip } from "@mui/material";
import { DEV_UNDER_PROCESS } from "../../constants/index";
import Image from "next/image";

interface CustomIconProps {
  id: string;
  isAvailable: boolean;
  icon: string;
  customStyles?: {
    [key: string]: any;
  };
  iconStyles?: {
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
  iconStyles,
}) => {
  return (
    <>
      <Tooltip title={isAvailable ? "" : DEV_UNDER_PROCESS} arrow>
        <Button
          style={{
            padding: "0",
            minWidth: "unset",
            minHeight: "unset",
            backgroundColor: customStyles?.backgroundColor
              ? customStyles.backgroundColor
              : "#A0DBEB",
            borderRadius: "4px",
            height: customStyles?.height ? customStyles.height : "30px",
            width: customStyles?.width ? customStyles.width : "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            outline: "none",
            flexShrink: 0,
            ...customStyles,
          }}
          onClick={OnClick}
          
        >
          <Image
            src={icon}
            style={{
              width: iconStyles?.width ? iconStyles.width : "20px",
              height: iconStyles?.height ? iconStyles.height : "20px",
              ...iconStyles,
            }}
            alt={`${id}-icon`}
          />
        </Button>
      </Tooltip>
    </>
  );
};

export default CustomIcon;
