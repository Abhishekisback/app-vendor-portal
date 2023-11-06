import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DEV_UNDER_PROCESS } from "../../constants/index";
import { poppins } from "@/app/fonts";

interface RadioButtonProps {
  radioBtnGrpName: string;
  optionList: List[];
  name: string;
  OnChange: (value: string) => void;
  isAvailable: boolean;
}

interface List {
  label: string;
  value: string;
}

const CustomRadioButtons: React.FC<RadioButtonProps> = ({
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
    <div style={{ width: "100px" }}>
      <span>{radioBtnGrpName}</span>
      <RadioGroup
        style={{ fontFamily: poppins.style.fontFamily }}
        aria-label="gender"
        name={name}
      >
        {optionList.map((ele, i) => {
          return (
            <React.Fragment key={i}>
              <FormControlLabel
                disabled={!isAvailable}
                key={i}
                value={ele.value}
                control={
                  <Radio
                    style={{ fontFamily: poppins.style.fontFamily }}
                    checked={selectedValue === ele.value}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setSelectedValue(ele.value);
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
    </div>
  );
};

export default CustomRadioButtons;
