import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { OPTION_NOT_FOUND, DEV_UNDER_PROCESS } from "../../constants/index";
import Tooltip from "@mui/material/Tooltip";


interface InputProps {
  id: string;
  customStyles?: object;
  isAvailable: boolean;
  placeHolder: string;
  optionList: options[];
  OnChange: (value: options[]) => void;
}

interface options {
  label: string;
  value: any;
}

const SearchableSelectTag: React.FC<InputProps> = ({
  optionList,
  id,
  OnChange,
  customStyles,
  isAvailable,
  placeHolder,
}) => {
  const [selectedValues, setSelectedValues] = useState<options[]>([]);
  const [max, setMax] = useState<number>(2);

  const handleDelete = (valueToDelete: options) => {
    setSelectedValues((prevValues) =>
      prevValues.filter((item) => item !== valueToDelete)
    );
  };

  const filteredOptions = optionList.filter(
    (option) => !selectedValues.some((values) => values.value === option.value)
  );

  const styles: React.CSSProperties = {
    width: "155px",
    height: "35px",
    borderRadius: "4px",
  };

  const chipStyles: React.CSSProperties = {
    marginTop: "20px",
    backgroundColor: "blue",
    color: "white",
  };

  return (
    <>
      <Tooltip arrow title={isAvailable ? "" : DEV_UNDER_PROCESS}>
        <Autocomplete
          disablePortal
          id={id}
          disabled={isAvailable ? false : true}
          multiple
          options={filteredOptions}
          noOptionsText={OPTION_NOT_FOUND}
          value={[]}
          onChange={(event, value) => {
            setSelectedValues((prev) => {
              return [...prev, ...value.filter((item) => !prev.includes(item))];
            });

            OnChange(value);
          }}
          sx={styles}
          renderInput={(params) => (
            <TextField {...params} placeholder={placeHolder} />
          )}
        />
      </Tooltip>
      <div>
        {selectedValues.slice(0, max).map((value, index) => (
          <>
            <Chip
              key={index}
              label={value.label}
              onDelete={() => handleDelete(value)}
              sx={{
                ...chipStyles,
                "& .MuiChip-deleteIcon": {
                  color: "white",
                },
              }}
            />
          </>
        ))}
        {max > 2 && (
          <Chip
            label="View less"
            onClick={() => {
              setMax(2);
            }}
            sx={chipStyles}
          />
        )}
        {selectedValues.length > max && (
          <Chip
            onClick={() => {
              setMax(selectedValues.length);
            }}
            label={`+${selectedValues.length - max} more`}
            sx={chipStyles}
          />
        )}
      </div>
    </>
  );
};

export default SearchableSelectTag;
