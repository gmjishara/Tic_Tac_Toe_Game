import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Squre from "../../Common/Squre/Squre";

export default function Main() {
  const [numberItem, setNumberItem] = useState("");
  const [value, setValue] = useState("");
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const boxStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  };

  
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
                item={item}
                numberItem={numberItem}
                setNumberItem={setNumberItem}
                value={value}
                setValue={setValue}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button variant="contained" color="info">
        Start Game
      </Button>
    </Box>
  );
}
