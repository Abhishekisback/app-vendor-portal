// CustomTextArea.tsx

import React from "react";
import { StyledTextField, StyledTextFieldWrapper } from "./page";

interface CustomTextFieldProps {
  isAvailable?: boolean;
  customStyles?: {
    [key: string]: string;
  };
  hoverStyles?: {
    [key: string]: string;
  };
  focusStyles?: {
    [key: string]: string;
  };

  placeHolder: string;
  OnChange: (value: string) => void;
  id: string;
  type: string;
}

const CustomTextFieldStyled: React.FC<CustomTextFieldProps> = ({
  isAvailable = true,
  placeHolder,
  OnChange,
  id,
  customStyles,
  hoverStyles,
  focusStyles,
}) => {
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    OnChange(e.target.value);
  };

  return (
    <>
      <StyledTextFieldWrapper customStyles={customStyles}>
        <StyledTextField
          id={id}
          disabled={!isAvailable}
          placeholder={placeHolder}
          customStyles={customStyles}
          onChange={handleCommentChange}
          hoverStyles={hoverStyles}
          focusStyles={focusStyles}
        />
      </StyledTextFieldWrapper>
    </>
  );
};

export default CustomTextFieldStyled;
