import { Button } from "@mui/material";
import React from "react";

export default function Squre({
  value,
  setValue,
  item,
  numberItem,
  setNumberItem,
}) {
  const cardStyle = {
    width: "100%",
    height: "80px",
    textAlign: "center",
    border: "1px solid",
    fontSize: "25px",
    cursor: "default",
  };
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={() => setNumberItem(item)}
        style={cardStyle}
      >
        {numberItem === item ? <p>{value}</p> : ""}
      </Button>
    </div>
  );
}
