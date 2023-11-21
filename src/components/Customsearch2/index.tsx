"use client";
import React, { useState } from "react";
import { Tooltip, InputBase, Paper } from "@mui/material/";
import Image from "next/image";
import "./styles.css";
import { DEV_UNDER_PROCESS } from "../../constants/index";

interface customSearchFieldProps {
  id: string;
  iconStyles?: {
    width: string;
    height: string;
    [key: string]: string;
  };
  isAvailable?: boolean;
  placeHolder: string;
  customStyles?: {
    [key: string]: string;
  };
  icon: string;
  closeIcon: string;
  OnChange: (value: string) => void;
}

const CustomSearchField2: React.FC<customSearchFieldProps> = ({
  isAvailable = true,
  placeHolder,
  OnChange,
  customStyles,
  id,
  iconStyles,
  icon,
  closeIcon,
}) => {
  const [text, setText] = useState("");

  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <Paper
          id={id}
          sx={{
            ml: 0,
            flex: 1,
            ":hover": {
              backgroundColor: "#EDF1F2",
              border: "1px solid #384C4C",
              color: "#384C4C",
              opacity: 1,
            },
            ":focus-within": {
              border: "1px solid #13A4CC",
              backgroundColor: "#FFFFFF",
            },
            backgroundColor: customStyles?.backgroundColor
              ? customStyles.backgroundColor
              : "#FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: customStyles?.boxShadow
              ? customStyles.boxShadow
              : "none",
            width: customStyles?.width ? customStyles.width : "100%",
            height: customStyles?.height ? customStyles.height : "30px",
            padding: "6px 0px 9px 6px",
            border: customStyles?.border
              ? customStyles.border
              : "1px solid transparent",
            fontFamily: customStyles?.fontFamily,
            color: "#808080",
            "& input::placeholder": {
              color: "#808080",
              opacity: 1,
              fontSize: "12px",
              width: "90%",
            },
            borderRadius: "5px",
          }}
        >
          <Image
            style={{
              width: iconStyles?.width ? iconStyles?.width : "20px",
              height: iconStyles?.height ? iconStyles?.height : "20px",
              ...iconStyles,
            }}
            src={icon}
            alt={`${id}-search`}
          />
          <InputBase
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
              OnChange(e.target.value);
            }}
            sx={{
              padding: "15px 0px 10px 4px",
              color: customStyles?.color ? customStyles.color : "#808080",
              fontFamily: customStyles?.fontFamily,
              fontSize: customStyles?.fontSize
                ? customStyles?.fontSize
                : "12px",
              height: "inherit",
              width: customStyles?.width ? customStyles.width : "100%",
              "& input::placeholder": {
                color: "#808080",
                opacity: 1,
                fontSize: customStyles?.fontSize
                  ? customStyles?.fontSize
                  : "12px",
                width: "81%",
              },
            }}
            placeholder={placeHolder}
            id={id}
          />
          {text.length > 0 ? (
            <Image
              onClick={() => {
                setText("");
                OnChange("");
              }}
              src={closeIcon}
              alt={`${id}-search`}
              width={20}
              height={20}
              style={{
                cursor: "pointer",
                marginRight: "5%",
                transform: "translateY(10%)",
              }}
            />
          ) : (
            ""
          )}
        </Paper>
      </Tooltip>
    </>
  );
};

export default CustomSearchField2;
