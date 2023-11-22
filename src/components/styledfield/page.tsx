import styled from "styled-components";

interface StyledTextFieldProps {
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

const StyledTextFieldWrapper = styled.div<StyledTextFieldProps>`
  width: ${(props) =>
    props.customStyles?.width ? props.customStyles.width : "100%"};
  height: ${(props) => props.customStyles?.height || "30px"};
  border-radius: 5px;
  background: #fff;
`;

const StyledTextField = styled.input<StyledTextFieldProps>`
  border-radius: ${(props) => props.customStyles?.borderRadius || "5px"};
  border: ${(props) => props.customStyles?.border || "2px solid #ADADAD"};
  width: 100%;
  background-color: ${(props) => props.customStyles?.backgroundColor || "#FFF"};
  height: 100%;
  padding: ${(props) => props.customStyles?.padding || "10px"};
  color: ${(props) => props.customStyles?.color || "#333"};
  opacity: 1;
  font-size: ${(props) => props.customStyles?.fontSize || "12px"};
  font-style: normal;
  font-weight: ${(props) => props.customStyles?.fontWeight || 600};
  line-height: normal;
  font-family: ${(props) => props.customStyles?.fontFamily || ""};
  box-sizing: border-box;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &::placeholder {
    color: #808080;
    font-family: ${(props) => props.customStyles?.fontFamily || ""};
    font-weight: normal;
    opacity: 1;
    font-style: normal;
    font-size: 12px;
  }
  &:hover {
    border-radius: ${(props) => props.hoverStyles?.borderRadius || "5px"};
    border: ${(props) => props.hoverStyles?.border || "2px solid #ADADAD"};
    background-color: ${(props) =>
      props.hoverStyles?.backgroundColor || "#EDF1F2"};
    box-shadow: ${(props) =>
      props.hoverStyles?.boxShadow || "0px 2px 8px 0px rgba(65, 65, 65, 0.16)"};
  }

  &:focus {
    border-radius: ${(props) => props.focusStyles?.borderRadius || "6px"};
    border: ${(props) => props.focusStyles?.border || "2px solid #0d7491"};
    background-color: ${(props) =>
      props.focusStyles?.backgroundColor || "#EDF1F2"};
    box-shadow: ${(props) =>
      props.focusStyles?.boxShadow || "0px 2px 8px 0px rgba(65, 65, 65, 0.16)"};
  }
`;

export { StyledTextFieldWrapper, StyledTextField };
