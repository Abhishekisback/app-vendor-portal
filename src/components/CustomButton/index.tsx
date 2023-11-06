"use client";
import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { DEV_UNDER_PROCESS } from "../../constants/index";

interface CustomButtonProps {
  id: string;
  startIcon?: string;
  isAvailable: boolean;
  endIcon?: string;
  variant: "outlined";
  btnText: string;
  customStyles?: {
    [key: string]: any;
  };
  OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  startIcon,
  id,
  endIcon,
  btnText,
  variant,
  isAvailable,
  customStyles,
  OnClick,
}) => {
  const Styles: React.CSSProperties = {
    textTransform: "none",
    display: "inline-flex",
    height: customStyles?.height ? customStyles?.height : "40px",
    width: customStyles?.width ? customStyles?.width : "120px",
    padding: customStyles?.padding
      ? customStyles?.padding
      : "6px, 12px, 2px, 10px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    borderRadius: customStyles?.backgroundColor
      ? customStyles?.backgroundColor
      : "4px",
    flexShrink: 0,
    backgroundColor: customStyles?.backgroundColor
      ? customStyles?.backgroundColor
      : "#FFF",
    border: customStyles?.border ? customStyles?.border : "2px solid#E0E0E0",
    color: customStyles?.color ? customStyles?.color : "#13A4CC",

    ...customStyles,
  };

  return (
    <>
      <Tooltip title={isAvailable ? "" : DEV_UNDER_PROCESS} arrow>
        <Button
          style={Styles}
          startIcon={
            startIcon ? (
              <Image
                alt={`${id}-startIcon`}
                src={startIcon}
                width={20}
                height={20}
              />
            ) : (
              ""
            )
          }
          endIcon={
            endIcon ? (
              <Image
                alt={`${id}-endIcon`}
                src={endIcon}
                width={20}
                height={20}
              />
            ) : (
              ""
            )
          }
          variant={variant}
          onClick={OnClick}
        >
          {btnText}
        </Button>
      </Tooltip>
    </>
  );
};

export default CustomButton;
