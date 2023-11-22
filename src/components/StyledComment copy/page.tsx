// StyledTextArea.tsx

import styled from "styled-components";

interface StyledTextAreaProps {
  customStyles?: {
    [key: string]: string;
  };
  hoverStyles?: {
    [key: string]: string;
  };
  focusStyles?: {
    [key: string]: string;
  };
}

const StyledTextAreaWrapper = styled.div<StyledTextAreaProps>`
  width: ${(props) =>
    props.customStyles?.width ? props.customStyles.width : "100%"};
  height: ${(props) => props.customStyles?.height || "65px"};
  border-radius: 5px;
  border: 2px solid #adadad;
  background: #fff;
  padding: 1px;
  &:hover {
    border-radius: ${(props) => props.hoverStyles?.borderRadius || "5px"};
    border: ${(props) => props.hoverStyles?.border || "2px solid #ADADAD"};
    background-color: ${(props) =>
      props.hoverStyles?.backgroundColor || "#edf1f2"};
    box-shadow: ${(props) =>
      props.hoverStyles?.boxShadow || "0px 2px 8px 0px rgba(65, 65, 65, 0.16)"};
  }
  &:focus-within {
    border: ${(props) => props.focusStyles?.border || "2px solid #0d7491"};
    background-color: ${(props) =>
      props.focusStyles?.backgroundColor || "#FFF"};
    color: ${(props) => props.focusStyles?.color || "#333"};
  }
`;

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  border-radius: 5px;
  border: none;
  width: 100%;
  background-color: ${(props) => props.customStyles?.backgroundColor || "#FFF"};
  height: 100%;
  padding: 10px;
  color: ${(props) => props.customStyles?.color || "#333"};
  opacity: 1;
  font-size: ${(props) => props.customStyles?.fontSize || "12px"};
  font-style: normal;
  font-weight: ${(props) => props.customStyles?.fontWeight || 600};
  line-height: normal;
  font-family: ${(props) => props.customStyles?.fontFamily || ""};
  outline: none;
  box-sizing: border-box;
  outline: none;
  resize: none;
  &::placeholder {
    color: #808080;
    font-family: ${(props) => props.customStyles?.fontFamily || ""};
    font-weight: normal;
  }
  &:hover {
    background-color: ${(props) =>
      props.hoverStyles?.backgroundColor || "#edf1f2"};
    color: ${(props) => props.hoverStyles?.color || "#333"};
  }

  &:focus-within {
    background-color: ${(props) =>
      props.focusStyles?.backgroundColor || "#FFF"};
    color: ${(props) => props.focusStyles?.color || "#333"};
  }
  &::-webkit-scrollbar {
    width: 7px;
    height: 0px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    width: 3px;
    background: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #dfdfdf;
    border-radius: 4px;
    color: #fff;
    border-radius: 20px;
  }
`;

export { StyledTextAreaWrapper, StyledTextArea };
