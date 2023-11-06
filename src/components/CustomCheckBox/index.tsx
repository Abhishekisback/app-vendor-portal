"use client";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { DEV_UNDER_PROCESS } from "../../constants/index";
import { poppins } from "@/app/fonts";


interface CheckBoxProps {
  label: string;
  isAvailable: boolean;
}

const Checkboxes: React.FC<CheckBoxProps> = ({ label, isAvailable }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const styles:React.CSSProperties={
     width:"fit-content",
     marginLeft:"0px"
  }

  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <div style={styles}>
          <label>
            <Checkbox
              checked={selected}
              onChange={(e) => {
                handleClick();
              }}
              sx={{
                color: "#111111",
                "&.Mui-checked": {
                  color: "#13A4CC",
                  fontFamily: poppins.style.fontFamily,
                },
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
