"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { DEV_UNDER_PROCESS } from "../../constants/index";
import Image from "next/image";

interface customTextFieldsProps {
  id: string;
  name: string;
  type: string;
  isAvailable?: boolean;
  placeHolder: string;
  customStyles?: {
    [key: string]: any;
  };
  icon?: string;
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
  icon,
}) => {
  const CssTextField = styled(TextField)({
    "& input::placeholder": {
      fontSize: "14px",
      color: customStyles?.color ? customStyles.color : "#808080",
      backgroundColor: customStyles?.backgroundColor
        ? customStyles.backgroundColor
        : "#FFF",
    },

    "& .MuiInputBase-input": {
      padding: customStyles?.padding ? customStyles?.padding : "10px",
      width: customStyles?.width || "180px",
      height: customStyles?.height || "30px",
      color: customStyles?.color || "#808080",
      backgroundColor: "#FFF",
      fontSize: customStyles?.fontSize ? customStyles?.fontSize : "10px",
      fontStyle: customStyles?.fontStyle ? customStyles?.fontStyle : "normal",
      fontWeight: customStyles?.fontWeight ? customStyles?.fontWeight : "400",
      lineHeight: customStyles?.lineHeight
        ? customStyles?.lineHeight
        : "normal",
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
        border: customStyles?.border
          ? customStyles.border
          : "2px solid #CDCDCD",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#cdcdcd82",
      },
      "&.MuiInputBase-input": {
        flexShrink: 0,
      },
    },
  });

  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <Box>
          <CssTextField
            id={id}
            name={name}
            type={type}
            disabled={isAvailable ? false : true}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {icon ? (
                    <Image
                      src={icon}
                      width={20}
                      height={20}
                      alt={`${id}-startIcon`}
                    />
                  ) : (
                    ""
                  )}
                </InputAdornment>
              ),
            }}
            placeholder={placeHolder}
            onChange={(e) => {
              OnChange(e.target.value);
            }}
          />
        </Box>
      </Tooltip>
    </>
  );
};

export default CustomTextField;
