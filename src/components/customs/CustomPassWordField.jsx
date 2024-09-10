import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { CiLock } from "react-icons/ci";

function CustomPassWordField({ errorSignIn, name }) {
  const [showPassword, setShowPassword] = useState(false);
  const { control } = useFormContext();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      control={control}
      // defaultValue="a@A123456"
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="Password"
          variant="filled"
          fullWidth
          size="small"
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          error={errorSignIn ? true : false}
          required
          helperText={errorSignIn ? errorSignIn : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div onClick={handleTogglePasswordVisibility}>
                  {showPassword ? (
                    <MdVisibility className="cursor-pointer" />
                  ) : (
                    <MdVisibilityOff className="cursor-pointer" />
                  )}
                </div>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <CiLock className="text-[#6E7079]" />
              </InputAdornment>
            ),
          }}
          sx={{
            borderRadius: "8px",
            border: "1px solid #FF5400",
            backgroundColor: "#FFFFFF !important",
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#7516ca",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#FFFFFF",
              },
          }}
        />
      )}
    />
  );
}

export default CustomPassWordField;
