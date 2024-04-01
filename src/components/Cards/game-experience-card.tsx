"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box } from "@mui/material";
import { GameExperience } from "@/utils/types";
import { motion } from "framer-motion";

interface GameCardProps {
  gameExperience: GameExperience;
}

const cardMotion = {
  rest: {},
  hover: {
    scale: 1,
    y: -20,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const buttonMotion = {
  rest: {},
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const GameCard: React.FC<GameCardProps> = ({ gameExperience }) => {
  return (
    <Box component={motion.div} initial="rest" whileHover="hover" >
      <Card
        component={motion.div}
        variants={cardMotion}
        sx={{
          background: "#071421",
          border: "5px solid transparent",
          "&:hover": {
            borderRadius: "5px",
            border: "5px solid #F86910",
            boxShadow: "0px 4.549px 45.486px 0px rgba(0, 0, 0, 0.10)",
          },
        }}
      >
        <CardMedia
          sx={{
            height: { xs: 170, sm: 210, md: 280, lg: 317 },
            width: "100%",
            borderRadius: "9.373px 9.373px 0px 0px",
          }}
          image={gameExperience.imgUrl}
          component="img"
          loading="lazy"
          title="card-image"
        />

        <CardContent
          sx={{
            paddingInline: {
              xs: "0.5rem",
              sm: "0.8rem",
              md: "1rem",
              lg: "2rem",
            },
            mt: { xs: 0, md: 2 },
            color: "white",
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            sx={{
              fontSize: { xs: "16px", sm: "24px", md: "34px" },
              fontWeight: { xs: 600, sm: 700 },
              color: "white",
            }}
          >
            {gameExperience.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: { xs: 300, sm: 400 },
              color: "white",
              textTransform: "uppercase",
            }}
            variant="body1"
            gutterBottom
            color="text.secondary"
          >
            {gameExperience?.tags?.join(" | ")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: { xs: 300, md: 400 },
              mt: { xs: 0, sm: 2 },
              color: "white",
              minHeight: "42px",
            }}
            variant="body1"
            color="text.secondary"
          >
            {gameExperience.description}
          </Typography>
          <Box
            component={Link}
            href={gameExperience.btnLink}
            sx={{
              margin: "auto",
              maxWidth: "fit-content",
            }}
          >
            <Button
              component={motion.div}
              variants={buttonMotion}
              sx={{
                borderRadius: "6px",
                mt: { xs: 1, sm: 2 },
                width: { xs: "130px", md: "162px" },
                height: { xs: "30px", md: "48px" },
                fontSize: { xs: "14px", md: "18px" },
                fontWeight: { xs: 400, md: 600 },
                background:
                  "linear-gradient(94deg, #C73300 10.11%, #F86910 89.7%)",
              }}
              variant="contained"
            >
              {gameExperience.btnTitle}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GameCard;
