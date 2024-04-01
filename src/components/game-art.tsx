"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import GameArtSilder from "./Sliders/game-art-slider";
import {gameArt} from "@/utils/types";

export default function GameArt({gameArtData}: {gameArtData: gameArt}) {
  return (
    <Box sx={{backgroundColor: "#fff"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {gameArtData.title && (
          <Typography
            variant="body1"
            sx={{
              fontSize: "40px",
              fontWeight: 600,
              marginTop: "100px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {gameArtData.title}
          </Typography>
        )}
        {gameArtData.description && (
          <Typography
            variant="h1"
            sx={{
              fontSize: {xs: "20px", sm: "24px"},
              fontWeight: {xs: 500, sm: 700},
              lineHeight: "41px",
              textTransform: "uppercase",
              color: "#00000",
              maxWidth:"1024px",
              padding:"0px 15px",
            }}
          >
            {gameArtData.description}
          </Typography>
        )}
      </Box>
      {gameArtData.images.length > 0 && <GameArtSilder gameArtImages={gameArtData.images} />}
    </Box>
  );
}
