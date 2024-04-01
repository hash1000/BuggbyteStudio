import * as React from "react";
import Card from "@mui/material/Card";

export default function GameArtCard({img}:any) {

  return (
    <Card
      sx={{
        border: "1px solid #000",
        background: ` url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        height: {xs:"230px",sm:"280px"},
        maxWidth:"400px",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
    </Card>
  );
}
