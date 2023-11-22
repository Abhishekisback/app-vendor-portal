// CustomTextArea.tsx

import React, { useState } from "react";
import { StyledTextAreaWrapper, StyledTextArea } from "../StyledComment/page";

interface CustomTextAreaProps {
  isAvailable?: boolean;
  lineCount: number;
  maxLimit: number;
  showTextCount?: boolean;
  customStyles?: {
    [key: string]: string;
  };
  focusStyles?: {
    [key: string]: string;
  };
  hoverStyles?: {
    [key: string]: string;
  };
  placeHolder: string;
  OnChange: (value: string) => void;
  id: string;
}

const CustomTextAreaStyled: React.FC<CustomTextAreaProps> = ({
  isAvailable = true,
  lineCount,
  maxLimit,
  showTextCount = false,
  placeHolder,
  OnChange,
  id,
  customStyles,
  focusStyles,
  hoverStyles,
}) => {
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= maxLimit) {
      setComment(e.target.value);
      OnChange(e.target.value);
    }
  };

  console.log("max limit", maxLimit);
  return (
    <>
      <StyledTextAreaWrapper
        customStyles={customStyles}
        focusStyles={focusStyles}
        hoverStyles={hoverStyles}
      >
        <StyledTextArea
          value={comment}
          rows={lineCount}
          id={id}
          disabled={!isAvailable}
          placeholder={placeHolder}
          onChange={handleCommentChange}
          customStyles={customStyles}
          focusStyles={focusStyles}
          hoverStyles={hoverStyles}
        />

        {showTextCount && (
          <p
            style={{
              color: comment.length >= maxLimit ? "red" : "#808080",
              marginTop: "0",
              fontFamily: customStyles?.fontFamily,
            }}
          >
            {`${comment.length}/${maxLimit}`} characters
          </p>
        )}
      </StyledTextAreaWrapper>
    </>
  );
};

export default CustomTextAreaStyled;
