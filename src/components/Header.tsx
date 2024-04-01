"use client";
import * as React from "react";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/container";
import {hero} from "@/utils/types";
import HerosData from "@/Mock/HerosData.json";
import {Box} from "@mui/material";

const Heros: hero[] = HerosData;

export default function Header({num, url}: {num: number; url: string}) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 16, 32, 0.95), rgba(0, 16, 32, 0.95)), url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            color: "#fff",
          }}
        >
          <HeroSection {...Heros[num]} />
        </Box>
      </Container>
    </Box>
  );
}
