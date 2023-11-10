"use client";
import React, { useState } from "react";
import { TextField, Box, Tooltip, InputAdornment } from "@mui/material/";
import Image from "next/image";
import "./styles.css";
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

const CustomSearchField2: React.FC<customSearchFieldProps> = ({
  isAvailable = false,
  placeHolder,
  OnChange,
  customStyles,
  id,
  iconStyles,
  icon,
}) => {
  const [text, settext] = useState("");

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
          <TextField
            type="search"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
              OnChange(e.target.value);
            }}
            placeholder={placeHolder}
            id={id}
            sx={{
              width: customStyles?.width ? customStyles.width : "160px",
              "& input::placeholder": {
                padding: customStyles?.padding
                  ? customStyles?.padding
                  : "10px 0px 9px 0px;",
                fontSize: customStyles?.fontSize
                  ? customStyles?.fontSize
                  : "12px",
                fontWeight: 400,
                fontStyle: "normal",
                color:"black",
                width: "fit-content",
                lineHeight: customStyles?.lineHeight
                  ? customStyles.lineHeight
                  : "18px",
                  backgroundColor:"white"
              },

              "& .MuiInputBase-input": {
                padding: customStyles?.padding
                  ? customStyles?.padding
                  : "6px 10px 9px 0px;",
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
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: customStyles?.border ? customStyles.border : "none",
                  boxShadow: customStyles?.boxShadow
                    ? customStyles.boxShadow
                    : "",
                },
                "&:hover fieldset": {
                  backgroundColor: "",
                },
                "&.Mui-focused fieldset": {
                  border: "3px solid #13A4CC ",
                  borderRadius: "4px",
                },
                "&.MuiInputBase-input": {
                  flexShrink: 0,
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {icon && (
                    <Image
                      src={icon}
                      style={{
                        width: iconStyles?.width ? iconStyles.width : "20px",
                        height: iconStyles?.height ? iconStyles.height : "20px",
                        paddingTop: "2px",
                        paddingBottom: "6px",
                        paddingRight: "2px",
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

export default CustomSearchField2;