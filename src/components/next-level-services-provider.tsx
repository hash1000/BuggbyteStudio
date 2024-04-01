"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceDetail } from "@/utils/types";
import "swiper/css";
import ServiceDetailsData from "../Mock/services-detail.json";

const arrowMotion = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    x: "90%",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const NextLevelServicesProvider = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const serviceDetails: ServiceDetail[] = ServiceDetailsData;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1440px",
          m: "auto",
        }}
      >
        <Box
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          sx={{
            textAlign: "center",
            p: {
              xs: "70px 0 30px 0",
              md: "80px 0 50px 0",
              lg: "90px 0 60px 0",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#FFF",
              fontSize: "25px",
              fontWeight: 600,
              lineHeight: 1.8,
              textTransform: "uppercase",
            }}
          >
            WE PROVIDE
          </Typography>
          <Typography
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="200"
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
            Next Level Services
          </Typography>
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
          <Box
            sx={{
              marginBottom: "-7px",
            }}
          >
            <Swiper
              loop
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
                410: {
                  slidesPerView: 1.5,
                },
                550: {
                  slidesPerView: 2,
                },
                700: {
                  slidesPerView: 2.3,
                },
                850: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {serviceDetails?.map((service: ServiceDetail, index: number) => (
                <SwiperSlide key={index}>
                  <Box
                    className="slide-wrapper"
                    sx={{
                      float: "left",
                      position: "relative",
                      overflow: "hidden",
                      color: "white",
                      width: "100%",
                      "& .service-title": {
                        color: "#EAEAEA",
                        fontSize: "28px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        letterSpacing: "0.56px",
                      },
                      "& .slide-content-overlay": {
                        position: "absolute",
                        bottom: "1.5%",
                        left: 0,
                        width: "-webkit-fill-available",
                        overflow: "hidden",
                        p: "25px 19px",
                        display: "flex",
                        alignItems: "end",
                        transition: "all .2s ease-out",
                      },
                      "&:hover .slide-overlay-1": {
                        opacity: 0,
                      },
                      "& .slide-overlay-2": {
                        height: "0",
                      },
                      "&:hover .slide-overlay-2": {
                        height: "100%",
                        background: "rgba(95, 29, 4, 0.8)",
                      },
                      "& .service-link": {
                        textDecoration: "underline",
                        color: "#FFF",
                        display: "block",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                        p: 0,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "468px",
                        width: "100%",
                        maxWidth: "400px",
                        minWidth: "360px",
                      }}
                      src={service.image}
                      alt={service.title}
                    />
                    <Box className="slide-content-overlay slide-overlay-1">
                      <Box>
                        <Typography className="service-title" variant="body1">
                          {service?.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component={Link}
                            href={service?.buttonLink ?? "/"}
                            className="service-link"
                          >
                            {service?.buttonText}
                          </Box>
                          <Box
                            sx={{
                              display: "inline-block",
                              margin: "7px 0px 0px 6px",
                            }}
                          >
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      component={motion.div}
                      initial="rest"
                      whileHover="hover"
                      className="slide-content-overlay slide-overlay-2"
                    >
                      <Box>
                        <Typography className="service-title" variant="body1">
                          {service?.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="service-description"
                          sx={{
                            color: "#EAEAEA",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "1.2",
                            letterSpacing: "0.32px",
                            margin: "12px 0 34px 0",
                          }}
                        >
                          {service?.description}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Box
                            component={Link}
                            href={service?.buttonLink ?? "/"}
                            className="service-link"
                          >
                            {service?.buttonText}
                          </Box>
                          <Box
                            component={motion.div}
                            sx={{
                              display: "inline-block",
                              margin: "7px 0px 0px 6px",
                              flexGrow: 2,
                            }}
                            variants={arrowMotion}
                          >
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NextLevelServicesProvider;
