"use client";

import { TimePicker } from "@mui/x-date-pickers";
import { Control, Controller } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label: string;
  control: Control<any> | undefined;
  rules: object;
  disabled?: boolean;
  sx?: object;
}

export default function TimePickerComp({
  name,
  label,
  control,
  rules,
  disabled,
  sx,
}: DatePickerProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TimePicker
          onChange={onChange}
          sx={{ ...sx, width: "100%" }}
          value={new Date(value)}
          label={label}
          format="HH:mm"
          disabled={disabled}
          slotProps={{
            textField: { error: !!error, helperText: error?.message },
          }}
        />
      )}
    ></Controller>
  );
}
