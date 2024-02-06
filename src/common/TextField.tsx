import { TextField } from "@mui/material";
import { Controller, Control, FieldValues } from "react-hook-form";

interface TextFieldProp {
  control: Control<any> | undefined;
  label: string;
  name: string;
  rules?: object;
  valueovr?: string;
  readOnly?: boolean;
  onChangeovr?: Function;
  toUpperCase?: boolean;
  toLowerCase?: boolean;
  numericInput?: boolean;
}

export const TextFieldComp = ({
  control,
  label,
  name,
  rules,
  valueovr,
  readOnly,
  onChangeovr,
  toUpperCase,
  toLowerCase,
  numericInput,
}: TextFieldProp) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={valueovr}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <TextField
            helperText={error ? error.message : null}
            error={!!error}
            onChange={(e) => {
              if (toUpperCase) {
                onChange(e.target.value.toUpperCase());
              } else if (toLowerCase) {
                onChange(e.target.value.toLowerCase());
              } else {
                onChange(e);
              }
            }}
            onBlur={(e) => {
              if (onChangeovr !== undefined) {
                onChangeovr(e.target.value);
              }
            }}
            inputRef={ref}
            value={value}
            label={label}
            variant="outlined"
            inputProps={{
              readOnly: readOnly,
              inputMode: numericInput ? "numeric" : "text",
            }}
            fullWidth
          />
        )}
      />
    </>
  );
};
