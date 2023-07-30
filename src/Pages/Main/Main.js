import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Squre from "../../Common/Squre/Squre";

export default function Main() {
  const [value, setValue] = useState("X");
  const [start, setStart] = useState(false);
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [buttonValue, setButtonValue] = useState([]);
  const [win, setWin] = useState(false);

  const boxStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  };

  const buttonClick = () => {
    setValue("X");
    setStart(true);
    setButtonValue([]);
  };

  useEffect(() => {
    setStart(false);
  }, [value]);

  useEffect(() => {
    if (
      buttonValue[0] === buttonValue[1] &&
      buttonValue[0] === buttonValue[2]
    ) {
      setWin(true);
    }
  }, [buttonValue]);

  return (
    <Box sx={boxStyle}>
      <Box sx={{ marginTop: "50px" }}>
        <h1>Next Player: {value}</h1>
      </Box>
      <Box sx={{ width: "15%", margin: "35px 0 50px 0 " }}>
        <Grid container direction={"row"} sx={{ width: "100%" }}>
          {number.map((item) => (
            <Grid item sm={4}>
              <Squre
                value={value}
                setValue={setValue}
                start={start}
                item={item}
                setArray={setButtonValue}
                array={buttonValue}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button variant="contained" color="info" onClick={buttonClick}>
        Start Game
      </Button>
    </Box>
  );
}
