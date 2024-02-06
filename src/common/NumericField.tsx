import { Controller, Control } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { TextField } from "@mui/material";

interface NumericProps {
  control: Control<any> | undefined;
  label: string;
  name: string;
  currency?: string;
  format?: string;
  readOnly?: boolean;
  rules?: object;
  disabled?: boolean;
}

export default function NumericFieldComp({
  name,
  label,
  control,
  rules,
  readOnly,
  disabled,
}: NumericProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <NumericFormat
            onChange={onChange}
            value={value}
            label={label}
            inputRef={ref}
            customInput={TextField}
            error={!!error}
            fullWidth
            allowNegative={false}
            inputProps={{
              readOnly: readOnly,
              disabled: disabled,
            }}
          />
        )}
      />
    </>
  );
}
