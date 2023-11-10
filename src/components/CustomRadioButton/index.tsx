"use client"
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DEV_UNDER_PROCESS } from "../../constants/index";


interface RadioButtonProps {
  id: string;
  labelStyles?: labels;
  borderColor?: string;
  fillColor?: string;
  size?: string;
  radioBtnGrpName: string;
  optionList: List[];
  name: string;
  OnChange: (value: string) => void;
  isAvailable: boolean;
}

interface labels {
  [key: string]: any;
}

interface List {
  label: string;
  value: string;
}

const CustomRadioButtons: React.FC<RadioButtonProps> = ({
  id,
  labelStyles,
  fillColor,
  size,
  borderColor,
  isAvailable,
  optionList,
  name,
  OnChange,
  radioBtnGrpName,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    OnChange(event.target.value);
  };

  return (
    <div id={id} style={{ width: "fit-content" }}>
      <span>{radioBtnGrpName}</span>
      <Tooltip title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <RadioGroup id={id} aria-label={`${id}-radio`} name={name}>
          {optionList.map((ele, i) => {
            return (
              <React.Fragment key={i}>
                <FormControlLabel
                  style={labelStyles}
                  disabled={!isAvailable}
                  key={i}
                  value={ele.value}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: size ? size : "20px",
                        },
                        color: borderColor ? borderColor : "#13A4CC",
                        "&.Mui-checked": {
                          color: fillColor ? fillColor : "#13A4CC",
                        },
                      }}
                      checked={selectedValue === ele.value}
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setSelectedValue(ele.value);
                          OnChange(ele.value)
                        }
                      }}
                    />
                  }
                  label={ele.label}
                />
              </React.Fragment>
            );
          })}
        </RadioGroup>
      </Tooltip>
    </div>
  );
};

export default CustomRadioButtons;
