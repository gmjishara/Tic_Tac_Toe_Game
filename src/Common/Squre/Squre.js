import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Squre({ value, setValue }) {
  const [val, setVal] = useState(value);
  const [isFilled, setIsFilled] = useState(false);

  const cardStyle = {
    width: "100%",
    height: "80px",
    textAlign: "center",
    border: "1px solid",
    fontSize: "25px",
    cursor: "default",
  };

  useEffect(() => {
    if (value === "" || value === "O") {
      setValue("X");
    } else {
      setValue("O");
    }
  }, [val]);

  useEffect(() => {
    if (value === "") {
      setVal("");
      setIsFilled(false);
    }
  }, [value]);

  const buttonClick =()=>{
    setVal(value);
    setIsFilled(true);
  }

  return (
    <div>
      <Button
        disabled={isFilled}
        variant="contained"
        color="success"
        onClick={buttonClick}
        style={cardStyle}
      >
        <p>{val}</p>
      </Button>
    </div>
  );
}
