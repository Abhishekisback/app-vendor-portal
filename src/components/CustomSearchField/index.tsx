"use client";
import React from "react";
import { TextField, Box, Tooltip, InputAdornment } from "@mui/material/";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { DEV_UNDER_PROCESS } from "../../constants/index";


interface customSearchFieldProps {
  id: string;
  iconStyles: {
    width: string;
    height: string;
    [key: string]: any;
  };
  isAvailable?: boolean;
  placeHolder: string;
  customStyles?: {
    [key: string]: any;
  };
  icon: string;
  OnChange: (value: string) => void;
}

const CustomSearchField: React.FC<customSearchFieldProps> = ({
  isAvailable = false,
  placeHolder,
  OnChange,
  customStyles,
  id,
  iconStyles,
  icon,
}) => {
  const CssSearchField = styled(TextField)({
    "& input::placeholder": {
      padding: customStyles?.padding
        ? customStyles?.padding
        : "6px 0px 9px 0px;",
      fontSize: customStyles?.fontSize ? customStyles?.fontSize : "14px",
      fontWeight: 400,
      color: customStyles?.color ? customStyles.color : "#808080",
      width: "fit-content",
      lineHeight: customStyles?.lineHeight ? customStyles.lineHeight : "18px",
    },

    "& .MuiInputBase-input": {
      padding: customStyles?.padding
        ? customStyles?.padding
        : "6px 0px 9px 0px;",
      width: customStyles?.width || "180px",
      height: customStyles?.height || "30px",
      color: customStyles?.color || "#808080",
      backgroundColor: customStyles?.backgroundColor
        ? customStyles.backgroundColor
        : "#FFF",
      fontSize: customStyles?.fontSize ? customStyles?.fontSize : "16px",
      fontStyle: customStyles?.fontStyle ? customStyles?.fontStyle : "normal",
      fontWeight: customStyles?.fontWeight ? customStyles?.fontWeight : "400",
      lineHeight: customStyles?.lineHeight
        ? customStyles?.lineHeight
        : "normal",
      borderRadius: customStyles?.borderRadius
        ? customStyles.borderRadius
        : "6px",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: customStyles?.border ? customStyles.border : "none",
        boxShadow: customStyles?.boxShadow ? customStyles.boxShadow : "",
      },
      "&:hover fieldset": {
        border: customStyles?.border
          ? customStyles.border
          : "2px solid #CDCDCD",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#CDCDCD",
      },
      "&.MuiInputBase-input": {
        flexShrink: 0,
      },
    },
  });

  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <Box
          sx={{
            backgroundColor: customStyles?.backgroundColor
              ? customStyles.backgroundColor
              : "#FFF",
            width: "fit-content",
            borderRadius: customStyles?.borderRadius
              ? customStyles.borderRadius
              : "6px",
            height: "fit-content",
          }}
        >
          <CssSearchField
            id={id}
            disabled={isAvailable ? false : true}
            variant="outlined"
            placeholder={placeHolder}
            onChange={(e) => {
              OnChange(e.target.value);
              console.log("search field",e.target.value);
              
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {icon && (
                    <Image
                      src={icon}
                      style={{
                        width: iconStyles?.width ? iconStyles.width : "24px",
                        height: iconStyles?.height ? iconStyles.height : "24px",
                      }}
                      alt={`${id}-startIcon`}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Tooltip>
    </>
  );
};

export default CustomSearchField;