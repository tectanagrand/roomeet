"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { MouseEventHandler, SyntheticEvent, useState } from "react";

interface PasswordWithEyesProps {
  control: Control<any> | undefined;
  label: string;
  name: string;
  rules?: object;
}

export const PasswordWithEyes = ({
  control,
  label,
  name,
  rules,
}: PasswordWithEyesProps) => {
  const [showPassword, setPwd] = useState(false);

  const handleClickShowPassword = (event: SyntheticEvent<EventTarget>) =>
    setPwd((show) => !show);

  const handleMouseDownPassword =
    (event: SyntheticEvent<EventTarget>) => () => {
      event.preventDefault();
    };
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              {label}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={onChange}
              value={value}
              error={!!error}
              inputProps={{ autoComplete: "new-password" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <EyeIcon className="h-8 w-8" />
                    ) : (
                      <EyeSlashIcon className="h-8 w-8" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
    </>
  );
};
