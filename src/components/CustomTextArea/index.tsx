"use client";
import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TextAreaProps {
  id: string;
  maxLimit: number;
  placeHolder: string;
  customStyles?: {
    [key: string]: any;
  };
  OnChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiInputBase-root": {
    backgroundColor: "#EEEEEE",
    color: "#808080",
    fontSize: "14px",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #EEEEEE",
    },
    "&:hover fieldset": {
      border: "none",
      borderColor: "none",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EEEEEE",
    },
  },
});

const CustomTextArea: React.FC<TextAreaProps> = ({
  id,
  maxLimit,
  customStyles,
  placeHolder,
  OnChange,
}) => {
  const [comment, setComment] = useState<string>("");
  const maxCharLimit = maxLimit;

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    if (inputText.length <= maxCharLimit) {
      setComment(inputText);
    }
  };

  return (
    <Box
      sx={{
        width: customStyles?.width ? customStyles.width : "400px",
      }}
    >
      <CssTextField
        multiline
        rows={3}

        value={comment}
        onChange={OnChange}
        placeholder={placeHolder}
        id="custom-css-outlined-input"
        sx={{
          "& .MuiOutlinedInput-root": {
            border: customStyles?.border || "2px solid #CDCDCD",
            backgroundColor: customStyles?.backgroundColor || "#EEEEEE",
            width: customStyles?.width ? customStyles?.width : "400px",
            height: customStyles?.height || "100px",
            paddingTop: "2px",
            ...customStyles,
          },
          "&.Mui-focused fieldset": {
            borderColor: customStyles?.borderColor
              ? customStyles?.borderColor
              : " #EEEEEE",
          },
        }}

      
      />

      {/* <Typography
        color={comment.length >= maxCharLimit ? "error" : "textPrimary"}
      >
        {comment.length >= maxCharLimit && <p>Maximum characters reached</p>}
        {`${comment.length}/${maxCharLimit}`} characters
      </Typography> */}
    </Box>
  );
};

export default CustomTextArea;
