"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Logo1 from "@/public/assets/social-media-icons/sponser1.png";
import Logo2 from "@/public/assets/social-media-icons/sponser2.png";
import Logo3 from "@/public/assets/social-media-icons/sponser3.png";
import Logo4 from "@/public/assets/social-media-icons/sponser4.png";
import Logo5 from "@/public/assets/social-media-icons/sponser5.png";
import Logo6 from "@/public/assets/social-media-icons/sponser6.png";
import Logo7 from "@/public/assets/social-media-icons/sponser7.png";
import Star from "@/public/assets/social-media-icons/star.svg";
import WhiteStar from "@/public/assets/social-media-icons/white-star.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Sponsor() {
  const logoStyles = {
    display: "inline-block",
    margin: { xs: "0 8px", sm: "0 15px", md: "0 20px" },
    "& .logo": {
      height: { xs: "auto" },
      width: { xs: "160px", sm: "180px", md: "200px", lg: "219px" },
    },
  };

  const textToReverse = "BUGG BYTE STUDIO";
  const reflectedText = textToReverse
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  return (
    <>
      <Box
        sx={{
          background: {
            xs: "linear-gradient(0deg, rgba(255,255, 255) 55%, rgba(0,0,0,0.1) 45%)",
            sm: "linear-gradient(0deg, rgba(255,255, 255) 50%, rgba(0,0,0,0.1) 50%)",
          },
          paddingBottom: "55px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            marginX: "auto",
          }}
        >
          <Marquee>
            <Box sx={logoStyles}>
              <Image
                className="logo"
                src={Logo1}
                alt="Logo1"
                height={60}
                width={200}
              />
            </Box>
            <Box sx={logoStyles}>
              <Image
                className="logo"
                src={Logo2}
                alt="Logo2"
                height={60}
                width={200}
              />
            </Box>
            <Box sx={logoStyles}>
              <Image
                className="logo"
                src={Logo3.src}
                alt="Logo3"
                height={60}
                width={200}
              />
            </Box>
            <Box sx={logoStyles}>
              <Image
                className="logo"
                src={Logo4.src}
                alt="Logo4"
                height={60}
                width={200}
              />
            </Box>
            <Box sx={logoStyles}>
              <Image
                className="logo"
                src={Logo5.src}
                alt="Logo5"
                height={58}
                width={210}
              />
            </Box>
            <Box sx={logoStyles}>
              <Image
                className="logo"
                src={Logo6.src}
                alt="Logo6"
                height={60}
                width={200}
              />
            </Box>
            <Box sx={logoStyles}>
              <Image
                className="logo"
                src={Logo7.src}
                alt="Logo6"
                height={60}
                width={200}
              />
            </Box>
          </Marquee>
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            top: { xs: "8px", sm: "15px", md: "20px", lg: "34px" },
          }}
        >
          <Box
            sx={{
              transform: "rotate(4.25deg)",
              width: "calc(100% + 14px)",
              padding: {
                xs: "8px 0px",
                sm: "10px 0px",
                md: "20px 0px",
                lg: "30px 0px",
              },
              marginLeft: "-8px",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            }}
          >
            <Box
              sx={{
                maxWidth: "1440px",
                margin: "auto",
              }}
            >
              <Marquee direction="right">
                <Box
                  sx={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "4rem",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#EAEAEA",
                          fontSize: {
                            xs: "30px",
                            sm: "40px",
                            md: "50px",
                            lg: "60px",
                          },
                          fontWeight: 600,
                          letterSpacing: "10.8px",
                        }}
                      >
                        BUGG BYTE STUDIO
                      </Typography>
                      <Image
                        src={WhiteStar.src}
                        alt="star"
                        width={38}
                        height={38}
                      />
                      <Typography
                        sx={{
                          color: "#EAEAEA",
                          fontSize: {
                            xs: "30px",
                            sm: "40px",
                            md: "50px",
                            lg: "60px",
                          },
                          fontWeight: 600,
                          letterSpacing: "10.8px",
                        }}
                      >
                        BUGG BYTE STUDIO
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Marquee>
            </Box>
          </Box>
          <Box
            sx={{
              background:
                "linear-gradient(90deg, rgba(247, 67, 29, 0.20) 0%, rgba(232, 57, 19, 0.20) 100%)",
              transform: "rotate(-1.545deg)",
              width: "calc(100% + 14px)",
              marginLeft: "-8px",
              position: "relative",
              zIndex: -1,
              overflow: "hidden",
              padding: {
                xs: "8px 0px",
                sm: "10px 0px",
                md: "20px 0px",
                lg: "30px 0px",
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "1440px",
                margin: "auto",
              }}
            >
              <Marquee>
                <Box
                  sx={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4rem",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#F7431D",
                        fontSize: {
                          xs: "30px",
                          sm: "40px",
                          md: "50px",
                          lg: "60px",
                        },
                        fontWeight: 600,
                        letterSpacing: "10.8px",
                      }}
                    >
                      {reflectedText}
                    </Typography>
                    <Image src={Star.src} alt="star" width={38} height={38} />
                    <Typography
                      sx={{
                        color: "#F7431D",
                        fontSize: {
                          xs: "30px",
                          sm: "40px",
                          md: "50px",
                          lg: "60px",
                        },
                        fontWeight: 600,
                        letterSpacing: "10.8px",
                      }}
                    >
                      {reflectedText}
                    </Typography>
                  </Box>
                </Box>
              </Marquee>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
