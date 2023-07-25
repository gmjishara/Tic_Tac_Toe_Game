import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Squre({
  value,
  setValue,
  item,
  numberItem,
  setNumberItem,
}) {
  const [val, setVal] = useState("");

  const cardStyle = {
    width: "100%",
    height: "80px",
    textAlign: "center",
    border: "1px solid",
    fontSize: "25px",
    cursor: "default",
  };

  useEffect(() => {
    if(value==="" || value === "O"){
        setValue("X");
    } else {
        setValue("O")
    }
    
  }, [val]);

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={() => setVal(value)}
        style={cardStyle}
      >
        <p>{val}</p>
      </Button>
    </div>
  );
}
