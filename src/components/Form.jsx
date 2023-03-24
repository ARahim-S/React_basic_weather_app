import { useState } from "react";
import { Box, Button } from "@mui/material/";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { getWeatherData } from "./getData";

const Form = ({ setResult }) => {
  const [city, setCity] = useState(null);

  const handleClick = async () => {
    const data = await getWeatherData(city);
    setResult(data);
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        justifyContent: "center",
        margin: "40px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="city"
        label="City"
        variant="outlined"
        onChange={(e) => setCity(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationSearchingIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={handleClick}
        color="success"
        size="small"
        variant="contained"
      >
        Check Weather
      </Button>
    </Box>
  );
};

export default Form;
