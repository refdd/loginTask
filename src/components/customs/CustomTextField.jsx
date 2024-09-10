import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { InputAdornment } from "@mui/material";

function CustomTextField({
  name,
  label,
  required,
  type,
  textErroe,
  erroStatus,
  IconInput,
  defaultValue,
}) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            id={name}
            error={erroStatus}
            helperText={textErroe}
            type={type}
            {...field}
            label={label}
            variant="filled"
            fullWidth
            size="small"
            required={required}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconInput className="text-[#6E7079]" />
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
    </Grid>
  );
}

export default CustomTextField;
