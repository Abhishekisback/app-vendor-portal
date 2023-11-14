"use client";
import React, { useState } from "react";
import { DEV_UNDER_PROCESS } from "../../constants/index";
import { Typography, TextField, Tooltip, Box } from "@mui/material";
import { poppins } from "@/app/fonts";

interface customTextAreaProps {
  isAvailable?: boolean;
  lineCount: number;
  id: string;
  showTextCount?: boolean;
  maxLimit: number;
  placeHolder: string;
  customStyles?: {
    [key: string]: any;
  };
  OnChange: (value: string) => void;
}

const CustomTextArea: React.FC<customTextAreaProps> = ({
  isAvailable,
  lineCount,
  maxLimit,
  showTextCount = false,
  placeHolder,
  OnChange,
  customStyles,
  id,
}) => {
  const [comment, setComment] = useState<string>("");
  const maxCharLimit = maxLimit;

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= maxCharLimit) {
      setComment(e.target.value);
      OnChange(e.target.value);
    }
  };

  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <Box
          sx={{
            width: "fit-content",
          }}
        >
          <TextField
            value={comment}
            multiline
            rows={lineCount}
            id={id}
            disabled={isAvailable ? false : true}
            variant="outlined"
            placeholder={placeHolder}
            onChange={handleCommentChange}
            sx={{
              width: customStyles?.width ? customStyles.width : "446px",
              borderRadius: customStyles?.borderRadius
                ? customStyles.borderRadius
                : "4px",
              backgroundColor: customStyles?.backgroundColor
                ? customStyles.backgroundColor
                : "#FFF",
              height: "fit-content",
              "& input::placeholder , & textArea::placeholder": {
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
                  : "7px 0px 8px 0px",
                color: customStyles?.color || "#333333",
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
                  border: customStyles?.border
                    ? customStyles.border
                    : "2px solid #EDF1F2",
                },
                "&.Mui-focused fieldset": {
                  border: "3px solid #13A4CC ",
                  borderRadius: customStyles?.borderRadius
                    ? customStyles.borderRadius
                    : "4px",
                },
                "&.MuiInputBase-input": {
                  flexShrink: 0,
                },
              },
              "& .MuiInputBase-root": {
                height: customStyles?.height ? customStyles.height : "60px",
                width: customStyles?.width ? customStyles.width : "446px",
              },
            }}
          />

          {showTextCount && (
            <Typography
            style={{color:"#808080", fontFamily:poppins.style.fontFamily}}
              color={comment.length >= maxCharLimit ? "error" : "#808080"}
            >
              {`${comment.length}/${maxCharLimit}`} characters
            </Typography>
          )}
        </Box>
      </Tooltip>
    </>
  );
};

export default CustomTextArea;
