"use client";

import React from "react";
import Image from "next/image";
import { hero } from "../utils/types";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSectionPortfolio({
  headerData,
}: {
  headerData: hero;
}) {
  const { title, text, des, image, buttonText } = headerData;

  return (
    <Box
      sx={{
        minHeight: { xs: "620px", md: "720px" },
        display: "flex",
        alignItems: "end",
        paddingTop: { xs: "100px", md: "160px" },
      }}
    >
      <Box
        sx={{
          minHeight: "550px",
          width: "100%",
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          gap: { xs: "30px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component={motion.div}
          variants={textVariants}
          initial="initial"
          animate="animate"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "start" },
            maxWidth: "600px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            component={motion.p}
            variants={textVariants}
            sx={{
              fontSize: { xs: "20px", sm: "28px" },
              fontWeight: { xs: 300, sm: 400 },
              color: "white",
              m: 0,
            }}
          >
            {text}
          </Box>
          <Box
            component={motion.p}
            variants={textVariants}
            sx={{
              fontSize: { xs: "50px", sm: "60px", md: "64px", lg: "74px" },
              fontWeight: { xs: 600, sm: 700 },
              m: 0,
              marginTop: "15px",
              lineHeight: { xs: "1", lg: "1.16" },
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              backgroundClip: "text",
              color: "transparent",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Box>
          <Box
            component={motion.p}
            variants={textVariants}
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
              fontWeight: { xs: 300, sm: 400 },
              m: 0,
              marginTop: "25px",
              color: "#fff",
            }}
          >
            {des}
          </Box>
          {buttonText !== undefined && (
            <Box
              component={motion.a}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              variants={textVariants}
              href={"#"}
            >
              <Button
                sx={{
                  padding: { xs: " 7px 58px", md: "7px 80px" },
                  borderRadius: "6px",
                  backgroundImage:
                    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: 600,
                  textTransform: "capitalize",
                  color: "#fff",
                  maxWidth: "fit-content",
                  marginTop: "25px",
                  marginBottom: "100px",
                }}
              >
                {buttonText}
              </Button>
            </Box>
          )}
        </Box>
        <Box
          component={motion.div}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          sx={{
            alignSelf: { xs: "auto", md: "end" },
          }}
        >
          <Box
            sx={{
              maxWidth: "550px",
              height: "100%",
              alignSelf: "center",
              paddingBottom: "100px",
              "& .hero-image": {
                objectFit: "contain",
                "@media (max-width: 1000px)": {
                  width: "450px",
                  height: "auto",
                },
                "@media (max-width: 550px)": {
                  width: "100%",
                  height: "auto",
                },
              },
            }}
          >
            {image && (
              <Image
                src={image}
                className="hero-image"
                alt="hero-image"
                width={500}
                height={500}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
