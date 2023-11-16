import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { DEV_UNDER_PROCESS } from "../../constants/index";

interface CustomButtonProps {
  hoverStyles?: {
    [key: string]: string;
  };
  focusStyles?: {
    [key: string]: string;
  };
  id: string;
  startIcon?: string;
  isAvailable: boolean;
  endIcon?: string;
  variant: "outlined";
  btnText: string;
  customStyles?: {
    [key: string]: string;
  };
  iconStyles?: {
    [key: string]: string;
  };
  OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  startIcon,
  id,
  endIcon,
  btnText,
  variant,
  isAvailable = false,
  customStyles,
  OnClick,
  iconStyles,
  focusStyles,
  hoverStyles,
}) => {
  return (
    <div>
      <Tooltip title={isAvailable ? "" : DEV_UNDER_PROCESS} arrow>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textTransform: "none",
            height: customStyles?.height ? customStyles?.height : "40px",
            width: customStyles?.width ? customStyles?.width : "130px",
            padding: customStyles?.padding
              ? customStyles?.padding
              : "6px, 12px, 2px, 10px",

            borderRadius: customStyles?.backgroundColor
              ? customStyles?.backgroundColor
              : "4px",
            flexShrink: 0,
            backgroundColor: customStyles?.backgroundColor
              ? customStyles?.backgroundColor
              : "#FFF",
            border: customStyles?.border
              ? customStyles?.border
              : "2px solid#E0E0E0",
            color: customStyles?.color ? customStyles?.color : "#13A4CC",
            opacity: 1,
            fontFamily: customStyles?.fontFamily,
            ...customStyles,

            "&:hover": {
              backgroundColor: hoverStyles?.backgroundColor
                ? hoverStyles.backgroundColor
                : "#0D7491",
              border: hoverStyles?.border
                ? hoverStyles.border
                : " 1px solid  rgba(0, 0, 0, 0.50)",
              cursor: "default",
              ...hoverStyles,
            },

            "&:focus": {
              border: focusStyles?.border
                ? focusStyles.border
                : "3px solid #333;",
              backgroundColor: focusStyles?.backgroundColor
                ? focusStyles.backgroundColor
                : "#13A4CC",
              color: focusStyles?.color ? focusStyles.color : "#FFFFFF",
              ...focusStyles,
            },
          }}
          startIcon={
            startIcon ? (
              <Image
                alt={`${id}-startIcon`}
                src={startIcon}
                style={{ width: "20px", height: "20px", ...iconStyles }}
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
                style={{ width: "20px", height: "20px", ...iconStyles }}
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
    </div>
  );
};

export default CustomButton;
