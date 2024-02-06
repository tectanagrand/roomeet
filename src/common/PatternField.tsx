import { Control, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { TextField } from "@mui/material";

interface PatternFieldProp {
  name: string;
  control: Control<any> | undefined;
  rules?: object;
  label: string;
  format: string;
  onChangeovr?: (e: any) => void;
  readOnly?: boolean;
  isNumString?: boolean;
  patternChar?: string;
}

export default function PatternFieldComp({
  name,
  control,
  rules,
  label,
  format,
  onChangeovr,
  readOnly,
  isNumString,
  patternChar,
}: PatternFieldProp) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <PatternFormat
          value={field.value}
          format={format}
          valueIsNumericString={isNumString}
          onChange={(e) => {
            if (onChangeovr !== undefined) {
              onChangeovr(e.target.value);
            }
            field.onChange(e.target.value);
          }}
          label={label}
          error={!!error}
          inputRef={field.ref}
          customInput={TextField}
          patternChar={patternChar}
          inputProps={{
            readOnly: readOnly,
          }}
          fullWidth
        />
      )}
    />
  );
}
