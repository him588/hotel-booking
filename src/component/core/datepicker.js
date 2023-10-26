import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
export default function HelperText({
  mindate,
  label,
  value,
  setvalue,
  maxdate,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        minDate={mindate}
        value={value}
        maxDate={maxdate}
        onChange={(date) => setvalue(date)}
        slotProps={{
          textField: {},
        }}
      />
    </LocalizationProvider>
  );
}
