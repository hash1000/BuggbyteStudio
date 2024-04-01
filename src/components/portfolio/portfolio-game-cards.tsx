"use client";

import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {Box, Button} from "@mui/material";
import dynamic from "next/dynamic";

const ImageMasonry = dynamic(() => import("./layout"), {ssr: false});

export default function PortfolioGameCards() {
  return (
    <Box
      sx={{
        background: "#FFF",
        padding: {xs: "50px 0px", md: "100px 0px"},
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          data-aos="fade-down"
          variant="body1"
          sx={{
            fontSize: {xs: "15px", sm: "20px", md: "22px", lg: "25px"},
            fontWeight: 500,
            marginTop: {xs: "30px", sm: "50px", md: "80px", lg: "100px"},
            letterSpacing: "0.4px",
            textTransform: "uppercase",
            color: "#030A12",
          }}
        >
          Crafting Unforgettable Gaming Experiences
        </Typography>
        <Typography
          data-aos="fade-down"
          variant="h1"
          sx={{
            fontSize: {xs: "26px", sm: "35px", md: "45px"},
            fontWeight: {xs: 600, sm: 700},
            textTransform: "uppercase",
            mt: {xs: "10px", sm: "20px", md: "20px", lg: "30px"},
            background:
              "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Games Are Vibrant Worlds <br /> With Charming Characters
        </Typography>
      </Box>
      <ImageMasonry />
    </Box>
  );
}
