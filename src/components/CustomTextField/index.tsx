"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { DEV_UNDER_PROCESS } from "../../constants/index";

interface customTextFieldsProps {
  id: string;
  name: string;
  type: string;
  isAvailable?: boolean;
  placeHolder: string;
  customStyles?: {
    [key: string]: any;
  };
  focusStyles?: {
    [key: string]: any;
  };
  hoverStyles?: {
    [key: string]: any;
  };
  OnChange: (value: string) => void;
}

const CustomTextField: React.FC<customTextFieldsProps> = ({
  isAvailable,
  type,
  name,
  placeHolder,
  OnChange,
  customStyles,
  id,
  focusStyles,
  hoverStyles,
}) => {
  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <TextField
          id={id}
          name={name}
          type={type}
          disabled={isAvailable ? false : true}
          variant="outlined"
          placeholder={placeHolder}
          onChange={(e) => {
            OnChange(e.target.value);
          }}
          sx={{
            width: customStyles?.width ? customStyles.width : "160px",
            "& input::placeholder": {
              fontSize: customStyles?.fontSize
                ? customStyles?.fontSize
                : "12px",
              fontWeight: 400,
              fontStyle: "normal",
              color: "#808080",
              opacity: 1,
              width: "fit-content",
              lineHeight: customStyles?.lineHeight
                ? customStyles.lineHeight
                : "18px",
            },

            "& .MuiInputBase-input": {
              padding: customStyles?.padding
                ? customStyles?.padding
                : "6px 10px 9px 13px;",
              width: customStyles?.width || "160px",
              height: customStyles?.height || "35px",
              color: customStyles?.color || "#333333",
              backgroundColor: customStyles?.backgroundColor
                ? customStyles.backgroundColor
                : "#FFF",
              fontSize: customStyles?.fontSize
                ? customStyles?.fontSize
                : "12px",
              fontStyle: customStyles?.fontStyle
                ? customStyles?.fontStyle
                : "normal",
              fontWeight: customStyles?.fontWeight
                ? customStyles?.fontWeight
                : "400",
              lineHeight: customStyles?.lineHeight
                ? customStyles?.lineHeight
                : "normal",
              borderRadius: customStyles?.borderRadius
                ? customStyles.borderRadius
                : "4px",
              ...customStyles,
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: customStyles?.border
                  ? customStyles.border
                  : "2px solid #CDCDCD",
                borderRadius: customStyles?.borderRadius
                  ? customStyles.borderRadius
                  : "4px",
              },
              "&:hover fieldset": {
                border: hoverStyles?.border
                  ? hoverStyles.border
                  : "2px solid #EDF1F2",
                ...hoverStyles,
              },
              "&.Mui-focused fieldset": {
                border: focusStyles?.border
                  ? focusStyles.border
                  : "3px solid #13A4CC ",
                borderRadius: focusStyles?.borderRadius
                  ? focusStyles.borderRadius
                  : "4px",
                ...focusStyles,
              },
              "&.MuiInputBase-input": {
                flexShrink: 0,
              },
            },
          }}
        />
      </Tooltip>
    </>
  );
};

export default CustomTextField;
