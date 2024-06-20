"use client";

import { TimePicker } from "@mui/x-date-pickers";
import { Control, Controller } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label: string;
  control: Control<any> | undefined;
  rules?: object;
  disabled?: boolean;
  sx?: object;
  valueOvr?: Date;
  onChangeOvr?: (value: any) => void;
}

export default function TimePickerComp({
  name,
  label,
  control,
  rules,
  disabled,
  sx,
  valueOvr,
  onChangeOvr,
}: DatePickerProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={valueOvr}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TimePicker
          onChange={(e) => {
            if (onChangeOvr) {
              onChangeOvr(e);
            }
            onChange(e);
          }}
          sx={{
            ...sx,
            width: "100%",
          }}
          value={valueOvr ? valueOvr : value}
          label={label}
          ampm={false}
          disablePast
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
