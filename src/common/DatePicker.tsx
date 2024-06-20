"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { Control, Controller, FieldValues } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label: string;
  control: Control<any> | undefined;
  rules: object;
}

export default function DatePickerComp({ name, label, control, rules }: DatePickerProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePicker
          onChange={onChange}
          sx={{ width: "100%" }}
          value={new Date(value)}
          label={label}
          slotProps={{
            textField: { error: !!error, helperText: error?.message },
          }}
          disablePast
        />
      )}
    ></Controller>
  );
}
