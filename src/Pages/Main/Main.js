import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Squre from "../../Common/Squre/Squre";

export default function Main() {
  const [value, setValue] = useState("X");
  const [start, setStart] = useState(false);
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [buttonValue, setButtonValue] = useState([[], [], []]);
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
    setWin(false);
    setButtonValue([[], [], []]);
  };

  useEffect(() => {
    setStart(false);
  }, [value]);

  useEffect(() => {
    console.log("working");
    for (let i = 0; i < 3; i++) {
      let value1 = buttonValue[i][0];
      let value2 = buttonValue[i][1];
      let value3 = buttonValue[i][2];

      let value4 = buttonValue[0][i];
      let value5 = buttonValue[1][i];
      let value6 = buttonValue[2][i];

      if (value1 && value1 === value2 && value1 === value3) {
        setWin(true);
      }

      if (value4 && value4 === value5 && value4 === value6) {
        setWin(true);
      }
    }

    let value7 = buttonValue[0][0];
    let value8 = buttonValue[1][1];
    let value9 = buttonValue[2][2];

    if (value7 && value7 === value8 && value7 === value9) {
      setWin(true);
    }

    let value10 = buttonValue[0][2];
    let value11 = buttonValue[1][1];
    let value12 = buttonValue[2][0];

    if (value10 && value10 === value11 && value10 === value12) {
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
                setArray={(val) => {
                  setButtonValue(val);
                }}
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
