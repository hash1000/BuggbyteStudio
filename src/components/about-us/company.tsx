import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Container from "../container";
import Image from "next/image";

export default function Company() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${"./assets/images/aboutus-setion-2.png"})`,
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
              padding: {
                xs: "4rem 0rem",
                sm: "6rem 0rem",
                md: "8rem 0rem",
                lg: "10rem 0rem",
              },
            }}
          >
            <Box sx={{ alignSelf: "center", flex: "30%", maxWidth: "400px" }}>
              <Box
                sx={{
                  fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "55px" },
                  fontWeight: 700,
                  lineHeight: { xs: "1.2", sm: "48px", md: "56px", lg: "64px" },
                  textTransform: "uppercase",
                }}
              >
                WE ARE{" "}
                <Typography
                  sx={{
                    backgroundImage:
                      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",

                    fontSize: {
                      xs: "30px",
                      sm: "40px",
                      md: "50px",
                      lg: "55px",
                    },
                    fontWeight: 700,
                    lineHeight: {
                      xs: "1.2",
                      sm: "48px",
                      md: "56px",
                      lg: "64px",
                    },
                    textTransform: "uppercase",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  bEST GAMEs DEVELOPMENT
                </Typography>{" "}
                Company
              </Box>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.05)",
                  fontSize: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
                  fontWeight: 600,
                  lineHeight: {
                    xs: "1.5",
                    sm: "64px",
                    md: "84px",
                    lg: "105.6px",
                  },
                  letterSpacing: "9px",
                  textTransform: "uppercase",
                }}
              >
                BUGBYTE
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                flex: "70%",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    minWidth: { xs: "auto", sm: "228px" },
                    "& .cartoon-img1": {
                      "@media (max-width: 800px)": {
                        width: "100%",
                        height: "auto",
                      },
                    },
                  }}
                >
                  <Image
                    src="/assets/images/aboutus-company-img1.png"
                    height={450}
                    width={328}
                    layout="intrinsic"
                    alt="cartoon-img1"
                    className="cartoon-img1"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: { xs: "auto", sm: "343px" },
                    marginLeft: "20px",
                    alignSelf: { xs: "flex-end", md: "flex-start" },
                    "& .cartoon-img2": {
                      "@media (max-width: 800px)": {
                        width: "100%",
                        height: "auto",
                      },
                    },
                  }}
                >
                  <Image
                    src="/assets/images/aboutus-company-img2.png"
                    height={312}
                    width={443}
                    layout="intrinsic"
                    alt="cartoon-img2"
                    className="cartoon-img2"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "15px",
                  borderRadius: "9px",
                  border: "6px solid #FDFFFF",
                  backgroundColor: "#081625",
                  minHeight: "155px",
                  position: { xs: "unset", md: "absolute" },
                  zIndex: 2,
                  width: { xs: "auto", sm: "575px" },
                  maxWidth: "max-content",
                  right: "0px",
                  bottom: "-30px",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 600,
                    lineHeight: { xs: "1.2", sm: "24px" },
                    textTransform: "capitalize",
                  }}
                >
                  Welcome to our world! We&apos;re the best development company
                  creating awesome 3D games, Avatar experiences, and AR/VR
                  wonders. Dive into the Metaverse with our NFT and blockchain
                  expertise. Our team excels in Unity and Unreal Engine
                  development, crafting games that stand out. Join us for
                  top-notch game design and engagement – your journey into the
                  digital realm starts here!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
