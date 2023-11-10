"use client";
import React, { useState } from "react";
import { DEV_UNDER_PROCESS } from "../../constants/index";
import { Typography, TextField, Tooltip, Box } from "@mui/material";

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
        <Box sx={{ width: "fit-content", height: "fit-content" }}>
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
                  : "14px",
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
                    : "2px solid #CDCDCD",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#cdcdcd82",
                },
                "&.MuiInputBase-input": {
                  flexShrink: 0,
                },
              },
            }}
          />
          {showTextCount && (
            <Typography
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
