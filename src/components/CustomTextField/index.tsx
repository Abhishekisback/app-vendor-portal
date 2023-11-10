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
}) => {
  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <Box>
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
              "& input::placeholder": {
                padding: customStyles?.padding
                  ? customStyles?.padding
                  : "10px 0px 9px 0px;",
                fontSize: customStyles?.fontSize
                  ? customStyles?.fontSize
                  : "12px",
                fontWeight: 400,
                fontStyle: "normal",
                color: "black",
                width: "fit-content",
                lineHeight: customStyles?.lineHeight
                  ? customStyles.lineHeight
                  : "18px",
                backgroundColor: "#FFF",
              },

              "& .MuiInputBase-input": {
                padding: customStyles?.padding
                  ? customStyles?.padding
                  : "7px 0px 8px 9px",
                width: customStyles?.width || "180px",
                height: customStyles?.height || "30px",
                color: customStyles?.color || "#808080",
                backgroundColor: "#FFF",
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
                    : "2px solid #cdcdcd96",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #CDCDCD",
                },
                "&.MuiInputBase-input": {
                  flexShrink: 0,
                },
              },
            }}
          />
        </Box>
      </Tooltip>
    </>
  );
};

export default CustomTextField;
