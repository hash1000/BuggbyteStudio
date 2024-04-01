"use client";
import React, { useEffect, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { slide } from "@/utils/types";

interface HeroSectionProps {
  Slide: slide;
}

const HeroSection: FC<HeroSectionProps> = ({ Slide }): JSX.Element => {
  const textIndex = useMotionValue(0);
  const texts = [Slide?.title?.t2];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: 1,
      duration: 4,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count,textIndex,texts.length,updatedThisRound]);

  return (
    <Grid
      container
      sx={{
        margin: "auto",
        maxWidth: "1370px",
        width: "100%",
        p: {
          xs: "7rem 1rem 2rem",
          sm: "10rem 2rem 2rem",
          md: "10rem 3rem 2rem",
          lg: "12rem 4rem 2rem",
        },
        mb: "auto",
      }}
    >
      <Grid
        item
        xs={12}
        sm={7}
        sx={{
          order: {
            sm: 0,
            xs: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>
            <Box
              component={motion.div}
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              {Slide.subTitle && (
                <Box
                  component={motion.p}
                  variants={textVariants}
                  sx={{
                    color: "#D9D9D9",
                    mb: { md: "22px", xs: "12px" },
                    fontSize: { md: "28px", sm: "24px", xs: "18px" },
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  {Slide.subTitle}
                </Box>
              )}
              {Slide.title?.t1 && Slide.title?.t2 && (
                <Box
                  component={motion.div}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  sx={{
                    color: "#F7F7F7",
                    fontSize: {
                      lg: "82.045px",
                      md: "46px",
                      sm: "40px",
                      xs: "30px",
                    },
                    fontWeight: 700,
                    lineHeight: 1.045,
                    textTransform: "uppercase",
                  }}
                >
                  {Slide.title.t1}
                  <br />
                  <Box
                    sx={{
                      minHeight: {
                        lg: "85.73px",
                        xs: "52.25px",
                      },
                    }}
                  >
                    <Box
                      component={motion.span}
                      variants={textVariants}
                      sx={{
                        mb: { md: "22px", xs: "12px" },
                        background:
                          "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                        backgroundClip: "text",
                        color: "transparent",
                        textTransform: "uppercase",
                        fontSize: {
                          lg: "82.045px",
                          md: "56px",
                          sm: "50px",
                          xs: "46px",
                        },
                        fontWeight: 700,
                        lineHeight: 1.045,
                      }}
                    >
                      <motion.span className="inline">
                        {displayText}
                      </motion.span>
                    </Box>
                  </Box>
                </Box>
              )}
              {Slide.description && (
                <Box
                  sx={{
                    mb: { md: "22px", xs: "12px" },
                    color: "#D9D9D9",
                    fontSize: { xs: "18px", sm: "22px", lg: "24px" },
                    fontWeight: 400,
                    lineHeight: { xs: "1.5", sm: "1.7", md: "normal" },
                  }}
                >
                  {Slide.description}
                </Box>
              )}
            </Box>

            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                gap: { lg: "32px", md: "26px", sm: "18px", xs: "8px" },
              }}
            >
              {Slide.btns.map((btn, index) => (
                <Box component={Link} href={btn.link} key={index}>
                  {btn.Styled ? (
                    <Box
                      component={motion.div}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover={{ scale: 1, y: -10, x: -10 }}
                      animate="animate"
                    >
                      <Button
                        sx={{
                          color: "#FFF",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          borderRadius: "6px",
                          background:
                            "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                          boxShadow: "20px 25px 50px 0px rgba(0, 0, 0, 0.50)",
                          fontSize: { md: "20px", xs: "15px" },
                          width: "100%",
                          textTransform: "capitalize",
                          whiteSpace: "nowrap",
                          p: {
                            md: "16px 34px",
                            sm: "14px 20px",
                            xs: "8px 16px",
                          },
                        }}
                        endIcon={
                          <ArrowOutwardIcon
                            sx={{ ml: { md: "37px", sm: "18px", xs: "8px" } }}
                          />
                        }
                      >
                        {btn.text}
                      </Button>
                    </Box>
                  ) : (
                    <Box
                      component={motion.div}
                      variants={buttonVariantsProfile}
                      initial="initial"
                      animate="animate"
                    >
                      <Button
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          p: {
                            md: "16px 34px",
                            sm: "14px 20px",
                            xs: "10px 20px",
                          },
                          whiteSpace: "nowrap",
                          borderRadius: "6px",
                          background: "#262626",
                          fontSize: { md: "20px", sm: "18px", xs: "14px" },
                          width: "100%",
                          textTransform: "capitalize",
                          ":hover": { color: "#262626", background: "#fff" },
                        }}
                      >
                        {btn.text}
                      </Button>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        {Slide.imagePath && (
          <Box
            component={motion.div}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            sx={{
              textAlign: "center",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .main-image": { width: "100%", height: "auto", px: "15px" },
            }}
          >
            <Image
              priority={true}
              src={Slide.imagePath}
              width={500}
              height={500}
              alt="hero-image"
              className="main-image"
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const buttonVariants = {
  initial: { opacity: 0, x: -500, scale: 0.2, duration: 1 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
      scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 },
    },
  },
};

const buttonVariantsProfile = {
  initial: { opacity: 0, x: -500, scale: 1.9 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      scale: { type: "spring", damping: 5, stiffness: 500 },
    },
  },
};

const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.4,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export default HeroSection;
