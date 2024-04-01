"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { OtherProjectsDetail } from "@/utils/types";
import Link from "next/link";
import FeaturedProjects from "@/Mock/featured-projects.json";
import "swiper/css";

export default function OtherProject() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const FeaturedProjectsData: OtherProjectsDetail[] = FeaturedProjects;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Box
      sx={{
        background: "#071421",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          m: "auto",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            p: "90px 0 60px 0",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "1",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Other Projects
          </Typography>
          {/* <Typography
            variant="body1"
            sx={{
              color: "#FFF",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: 1.8,
              textTransform: "uppercase",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography> */}
        </Box>

        {isLoading ? (
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <CircularProgress
              variant="indeterminate"
              sx={{
                color: "white",
              }}
            />
          </Box>
        ) : (
          <Box>
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                700: {
                  slidesPerView: 2.5,
                },
                850: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {FeaturedProjectsData &&
                FeaturedProjectsData?.map(
                  (service: OtherProjectsDetail, index: number) => (
                    <SwiperSlide key={index}>
                      <Box
                        className="slide-wrapper"
                        sx={{
                          width: "100%",
                          float: "left",
                          position: "relative",
                          overflow: "hidden",
                          color: "white",
                          "&:hover": {
                            ".hover-box": {
                              visibility: "visible",
                              opacity: 1,
                              transition: "all 0.3s ease-in-out",
                            },
                          },
                          "& .service-title": {
                            color: "#EAEAEA",
                            fontSize: "28px",
                            fontWeight: 600,
                            lineHeight: 1.2,
                            letterSpacing: "0.56px",
                          },
                          "& .slide-image": {
                            width: "100%",
                            height: "auto",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: "440px",
                            width: "100%",
                            maxWidth: "400px",
                            minWidth: "360px",
                          }}
                          src={`${service?.imageUrl}`}
                          alt={service?.title ?? ""}
                        />
                        <Box
                          className="hover-box"
                          sx={{
                            visibility: "hidden",
                            opacity: 0,
                          }}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "absolute",
                              zIndex: 2,
                              top: "0px",
                            }}
                          >
                            <Box
                              sx={{
                                background:
                                  "linear-gradient(88deg, rgba(221, 44, 0, 0.7) -9.17%, rgba(255, 63, 0, 0.7) 67.35%, rgba(250, 157, 4, 0.7) 130.66%)",
                                width: " 92%",
                                height: "92%",
                                display: "grid",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  textAlign: "center",
                                  margin: "0px 10px",
                                  opacity: 1,
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "#FFF",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {service.category}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: "#FFF",
                                    fontSize: {
                                      xs: "29px",
                                      sm: "33px",
                                      md: "36px",
                                    },
                                    fontWeight: 600,
                                    textTransform: "capitalize",
                                    marginTop: "5px",
                                    lineHeight: "1",
                                  }}
                                >
                                  {service.title}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: "#FFF",
                                    fontSize: {
                                      xs: "10px",
                                      sm: "13px",
                                      md: "24px",
                                    },
                                    fontWeight: 400,
                                    lineHeight: 1.2,
                                    textTransform: "capitalize",
                                    marginTop: "6px",
                                  }}
                                >
                                  {service.description}
                                </Typography>
                                {service.btnText && (
                                  <Box
                                    component={Link}
                                    href={service.btnLink ?? ""}
                                  >
                                    <Button
                                      sx={{
                                        marginTop: { xs: "14px", lg: "16px" },
                                        padding: {
                                          xs: "10px 28px",
                                          sm: "12px 38px",
                                          lg: "12px 34px",
                                        },
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        textTransform: "capitalize",
                                        color: "#F04B12",
                                        maxWidth: "fit-content",
                                        "&:hover": {
                                          backgroundColor: "white",
                                          padding: {
                                            xs: "12px 32px",
                                            sm: "13px 40px",
                                            lg: "14px 36px",
                                          },
                                          fontSize: "20px",
                                          transition: "all .3s ease-in-out",
                                        },
                                      }}
                                    >
                                      {service.btnText}
                                    </Button>
                                  </Box>
                                )}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  )
                )}
            </Swiper>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: "0px 0 70px",
        }}
      >
        <Box component={Link} href={"/portfolio"}>
          <Button
            sx={{
              position: "relative",
              marginTop: "25px",
              borderRadius: "6px",
              width: { xs: "150px", sm: "180px", md: "206px" },
              height: { xs: "30px", sm: "38px", md: "48px" },
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: { xs: 400, md: 600 },
              background:
                "linear-gradient(94deg, #C73300 10.11%, #F86910 89.7%)",
              boxShadow: "20px 25px 50px 0px rgba(0, 0, 0, 0.30)",
              color: "#fff",
            }}
          >
            View More Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
