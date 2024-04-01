"use client";
import React from "react";
import Container from "@/components/container";
import { Box, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import svg1 from "@/public/assets/social-media-icons/projectWIthUsIcon1.svg";
import svg2 from "@/public/assets/social-media-icons/projectWIthUsIcon2.svg";
import svg3 from "@/public/assets/social-media-icons/projectWIthUsIcon3.svg";
import arrow from "@/public/assets/social-media-icons/arrow.svg";

const projectInfoImage = {
  "@media (max-width: 600px)": {
    textAlign: "center",
  },
  "@media (min-width: 768px)": {
    marginRight: "20px",
  },
};

const projectImageStyled = {
  "@media (max-width: 600px)": {
    width: "270px",
    height: "250px",
  },
};

export default function ProjectWithUs() {
  return (
    <Box
      sx={{
        color: "white",
        paddingTop: "10rem",
        paddingBottom: "5rem",
        overflow: "hidden",
        marginTop: "-220px",
      }}
    >
      <Box
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Box
          sx={{
            background:
              "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            transform: "rotate(-1.545deg)",
            width: "calc(100% + 14px)",
            marginLeft: "-8px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Container>
            <Box
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: "15px", sm: "20px", md: "30px" },
                }}
              >
                <Box
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                  sx={{
                    order: { xs: 2, md: 1 },
                    transform: { xs: "", sm: "rotate(-1.096deg)" },
                    padding: { xs: "30px 20px", md: "50px 0px" },
                    textAlign: { xs: "center", sm: "" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "32px", lg: "42px" },
                      lineHeight: { xs: "1.2", md: "1.5" },
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    LET’S Create a Project with Us!
                  </Typography>
                  <Typography
                    data-aos="fade-left"
                    data-aos-delay="1000"
                    data-aos-duration="1200"
                    sx={{
                      color: "#EBEBF0",
                      fontSize: "18px",
                      fontWeight: 400,
                      maxWidth: "595px",
                      textAlign: { xs: "center", lg: "left" },
                    }}
                  >
                    We offer innovative solutions that will fit our
                    customer&apos;s requirements and for a long-lasting
                    partnership.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    order: { xs: 1, md: 2 },
                    ...projectInfoImage,
                    "&  .project-image": {
                      marginTop: "-98px",
                      verticalAlign: "bottom",
                      ...projectImageStyled,
                    },
                  }}
                >
                  <Image
                    className="project-image"
                    src="/assets/images/image-section2-landingPage.png"
                    alt="cartoon-img"
                    width={400}
                    height={323}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Container>
        <Grid
          container
          spacing={8}
          sx={{
            paddingTop: { xs: "50px", md: "0px" },
            flexDirection: { xs: "column", md: "row" },
            alignContent: { xs: "center", md: "left" },
          }}
        >
          <Grid item xs={12} sm={8} md={4}>
            <Box>
              <Box
                sx={{
                  display: "grid",
                  gap: "15px",
                }}
              >
                <Box
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    zIndex: -1,
                    left: "20px",
                    marginBottom: "15px",
                    maxWidth: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: "-4px",
                        bottom: 0,
                        background: "white",
                        width: "10px",
                        height: "10px",
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    sx={{
                      borderRightWidth: "thin",
                      width: "max-content",
                      height: "194px",
                      borderColor: "white",
                    }}
                  />
                </Box>
                <Box data-aos="zoom-in">
                  <Image
                    src={svg1.src}
                    width={60}
                    height={60}
                    alt="instagram-svg"
                  />

                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: "26px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    Quality Services
                  </Typography>
                </Box>

                <Box data-aos="fade-left" data-aos-delay="500">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src={arrow.src}
                      width={10}
                      height={11}
                      alt="instagram-svg"
                    />
                    <Typography
                      sx={{
                        color: "#EAEAEA",
                        fontSize: { xs: "18px", md: "14px" },
                        fontWeight: 400,
                      }}
                    >
                      At Buggbyte, we promise awesome gaming experiences.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src={arrow.src}
                      width={10}
                      height={11}
                      alt="instagram-svg"
                    />
                    <Typography
                      data-aos="fade-left"
                      data-aos-delay="800"
                      sx={{
                        color: "#EAEAEA",
                        fontSize: { xs: "18px", md: "14px" },
                        fontWeight: 400,
                      }}
                    >
                      We work hard to ensure everything, from the graphics to
                      the gameplay, is super cool for you.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <Box>
              <Box
                sx={{
                  display: "grid",
                  gap: "15px",
                }}
              >
                <Box
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    left: "20px",
                    zIndex: -1,
                    marginBottom: "15px",
                    maxWidth: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: "-4px",
                        bottom: 0,
                        background: "white",
                        width: "10px",
                        height: "10px",
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    light={true}
                    sx={{
                      borderRightWidth: "thin",
                      width: "max-content",
                      height: "159px",
                      borderColor: "white",
                    }}
                  />
                </Box>
                <Box data-aos="zoom-in">
                  <Image
                    src={svg2.src}
                    width={60}
                    height={60}
                    alt="instagram-svg"
                  />

                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: "26px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    Reliability
                  </Typography>
                </Box>

                <Box data-aos="fade-left" data-aos-delay="500">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src={arrow.src}
                      width={10}
                      height={11}
                      alt="instagram-svg"
                    />
                    <Typography
                      sx={{
                        color: "#EAEAEA",
                        fontSize: { xs: "18px", md: "14px" },
                        fontWeight: 400,
                      }}
                    >
                      You can trust us! Buggbyte is your dependable friend in
                      gaming.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src={arrow.src}
                      width={10}
                      height={11}
                      alt="instagram-svg"
                    />
                    <Typography
                      data-aos="fade-left"
                      data-aos-delay="800"
                      sx={{
                        color: "#EAEAEA",
                        fontSize: { xs: "18px", md: "14px" },
                        fontWeight: 400,
                      }}
                    >
                      We make sure everything runs smoothly, so you have a great
                      time playing without any interruptions.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <Box>
              <Box
                sx={{
                  display: "grid",
                  gap: "15px",
                }}
              >
                <Box
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    left: "20px",
                    zIndex: -1,
                    marginBottom: "15px",
                    maxWidth: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: "-4px",
                        bottom: 0,
                        background: "white",
                        width: "10px",
                        height: "10px",
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    light={true}
                    sx={{
                      borderRightWidth: "thin",
                      width: "max-content",
                      marginTop: "-8px",
                      height: "120px",
                      borderColor: "white",
                    }}
                  />
                </Box>

                <Box data-aos="zoom-in">
                  <Image
                    src={svg3.src}
                    width={60}
                    height={60}
                    alt="instagram-svg"
                  />

                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: "26px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    High-Quality Solutions
                  </Typography>
                </Box>

                <Box data-aos="fade-left" data-aos-delay="500">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src={arrow.src}
                      width={10}
                      height={11}
                      alt="instagram-svg"
                    />
                    <Typography
                      sx={{
                        color: "#EAEAEA",
                        fontSize: { xs: "18px", md: "14px" },
                        fontWeight: 400,
                      }}
                    >
                      Make your gaming experience even better with Buggbyte
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src={arrow.src}
                      width={10}
                      height={11}
                      alt="instagram-svg"
                    />
                    <Typography
                      data-aos="fade-left"
                      data-aos-delay="800"
                      sx={{
                        color: "#EAEAEA",
                        fontSize: { xs: "18px", md: "14px" },
                        fontWeight: 400,
                      }}
                    >
                      We&apos;re always working to give you top-notch stuff –
                      cool features, amazing tech – everything to make your
                      gaming super awesome!
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
