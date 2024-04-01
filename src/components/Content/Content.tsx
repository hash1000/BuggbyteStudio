"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Grid from "@mui/material/Grid";

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

const cardVariants = {
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

export default function ContentComponent({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  order,
}: {
  image: any;
  title: any;
  description: any;
  buttonText: any;
  buttonLink: any;
  order: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box>
      <Box
        ref={ref}
        sx={{
          padding: { xs: "50px 0px", md: "100px 0px" },
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 4, md: 8 }}
          sx={{
            minHeight: "369px",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Grid
            item
            component={motion.div}
            variants={cardVariants}
            initial="initial"
            animate={isInView?"animate":undefined}
            xs={12}
            sm={8}
            md={6}
            order={{ md: order }}
            sx={{
              ...(order === 1 && {
                display: "flex",
                justifyContent: "end",
              }),
              alignSelf: "center",
            }}
          >
            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                maxWidth: "529px",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Image
                src={image}
                alt={title}
                width={529}
                height={369}
                layout="intrinsic"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            sx={{
              alignSelf: "center",
              marginTop: { xs: "1rem", sm: "3rem", md: "0px" },
            }}
          >
            <Box
            component={motion.div}
            variants={textVariants}
            initial="initial"
            animate={isInView?"animate":undefined}
              sx={{
                 display: "grid",
                gap: { xs: "10px", md: "20px" },
              }}
            >
              <Typography 
              component={motion.p}
              variants={textVariants}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: { xs: "38px", md: "48px" },
                  lineHeight: { xs: "1.1", sm: "1.2", md: "1.3", lg: "1.5" },
                  backgroundImage:
                    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </Typography>
              <Typography
              component={motion.p}
              variants={textVariants}
                sx={{
                  fontSize: { xs: "18px", md: "18px" },
                  fontWeight: "400",
                  textTransform: "capitalize",
                  color: order == 0 ? "#000" : "#fff",
                }}
              >
                {description}
              </Typography>
              <Box 
              component={motion.a}
              href={buttonLink}
              variants={textVariants}>
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
                  }}
                >
                  {buttonText}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
