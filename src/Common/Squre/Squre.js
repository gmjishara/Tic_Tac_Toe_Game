import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Squre({ value, setValue,start }) {
  const [val, setVal] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cardStyle = {
    width: "100%",
    height: "80px",
    textAlign: "center",
    border: "1px solid",
    fontSize: "25px",
    cursor: "default",
  };

  useEffect(() => {
    if (isClicked) {
      if (value === "O") {
        setValue("X");
      } else {
        setValue("O");
      }
    }
  }, [val]);

  useEffect(() => {
    if (start) {
      setVal("");
      setIsFilled(false);
      setIsClicked(false);
    }
  }, [start]);

  const buttonClick = () => {
    setIsClicked(true);
    setVal(value);
    setIsFilled(true);
  };

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
