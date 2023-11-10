import * as React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import dayjs, { Dayjs } from "dayjs";

const DatePickerComponent = ({
  labelText,
  setTimePeriod,
}: {
  labelText: String;
  setTimePeriod: any;
}) => {
  const changeToSelectedDate =
    (selectedDate: any) => (event: React.MouseEvent<unknown>) => {
      setTimePeriod(selectedDate);
    };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <DemoItem label={labelText}>
          <DesktopDatePicker
            defaultValue={dayjs()}
            format="DD-MMM-YY"
            sx={{
              width: "180px",
              height: "30px",
              ".MuiOutlinedInput-input": {
                fontSize: "14px !important",
                color: "#000",
                fontFamily: "Source Sans Pro",
                fontWeight: "400",
              },
            }}
            onChange={(selectedDate: any) => changeToSelectedDate(selectedDate)}
          />
        </DemoItem>
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
