"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import TestimonialSlider from "./Sliders/testimonial-slider";

export default function TestimonialSectionContainer() {
  return (
    <Box sx={{background: "#071421"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
        
        data-aos="right-anime-rotate-fade"
          variant="body1"
          sx={{
            fontSize: "25px",
            fontWeight: 600,
            marginTop: "100px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "#ffff",
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
        
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
          variant="h1"
          sx={{
            fontSize: {xs: "30px", sm: "40px"},
            fontWeight: {xs: 500, sm: 700},
            lineHeight: "41px",
            textTransform: "uppercase",
            background:
              "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          OUR CLIENTS TRUST US
        </Typography>
      </Box>
      <TestimonialSlider />
    </Box>
  );
}
