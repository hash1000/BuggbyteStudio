"use client";
import * as React from "react";
import HeroSectionPortfolio from "@/components/PortfolioHeaderSection";
import Container from "@/components/container";
import { hero } from "@/utils/types";
import { Box } from "@mui/material";

export default function Header({ headerData }: { headerData: hero }) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 16, 32, 0.95), rgba(0, 16, 32, 0.95)), url(${headerData?.image})`,
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
          <HeroSectionPortfolio headerData={headerData} />
        </Box>
      </Container>
    </Box>
  );
}
