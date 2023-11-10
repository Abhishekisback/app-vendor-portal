"use client";
import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { DEV_UNDER_PROCESS } from "../../constants/index";

interface CheckBoxProps {
  borderColor?: string;
  name: string;
  label: string;
  isAvailable: boolean;
  fillColor: string;
  size: string;
  labelStyles?: {
    [key: string]: any;
  };
  OnChange: (value: string) => void;
}

const Checkboxes: React.FC<CheckBoxProps> = ({
  label,
  borderColor,
  fillColor,
  isAvailable,
  size,
  labelStyles,
  OnChange,
  name,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Not Checked");

  const handleClick = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    const newValue = selected ? "Checked" : "Not Checked";
    setValue(newValue);
    OnChange(newValue);
  }, [selected, OnChange]);

  const styles: React.CSSProperties = {
    width: "fit-content",
    marginLeft: "0px",
  };

  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <div style={styles}>
          <label
            style={{
              ...labelStyles,

              fontSize: "10px",
              fontWeight: "500",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            <Checkbox
              name={name}
              checked={selected}
              onChange={handleClick}
              sx={{
                color: borderColor ? borderColor : "#ADADAD",
                "&.Mui-checked": {
                  color: fillColor ? fillColor : "#13A4CC",
                },
                "& .MuiSvgIcon-root": { fontSize: size ? size : "18px" },
              }}
              disabled={isAvailable ? false : true}
            />
            {label}
          </label>
        </div>
      </Tooltip>
    </>
  );
};

export default Checkboxes;
