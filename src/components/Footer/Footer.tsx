"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import { Box, Grid, Typography } from "@mui/material";

import { FooterProps } from "@/utils/types";

const Footer: React.FC<FooterProps> = ({ footerData }: any) => {
  return (
    <Container>
      <Box
        sx={{
          padding: "60px 0",
          color: "#EAEAEA",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "30px", md: "20px" },
          }}
        >
          <Box
            sx={{
              flex: "30%",
              display: "flex",
              marginTop: "25px",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                maxWidth: "330px",
                justifyContent: "start",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box component={Link} href={"/"}>
                <Image
                  src="/assets/images/logo.png"
                  alt="bugg byte"
                  width={257}
                  height={71}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "14px" },
                  fontWeight: 400,
                }}
              >
                Reinventing the way of developing games, we aim to Develop the
                most master-peaced Games available on the market.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "70%",
            }}
          >
            <Grid container rowSpacing={{ xs: 4, sm: 8, md: 12 }} sx={{
              marginLeft:{xs:"auto",md:"35px"}
            }}>
              {footerData.map((data: any, index: any) => (
                <Grid item xs={12} sm={4} key={index} >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: { xs: "center", sm: "left" },
                        marginLeft:{xs:"0px",md:`${index===0 ?"40px":"0px"}`}
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#F86910",
                          background:
                            "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",

                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {data.section}
                      </Typography>
                      <Box>
                        {data?.links?.map((val: any, linkIndex: any) => (
                          <Box
                            key={linkIndex}
                            component={Link}
                            href={val.url}
                            sx={{
                              color: "#EAEAEA",
                              textDecoration: "none",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: { xs: "18px", md: "14px" },
                                fontWeight: 400,
                                marginTop: "20px",
                              }}
                            >
                              {val.text}
                            </Typography>
                          </Box>
                        ))}
                        {data.arVr && (
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: { xs: "center", sm: "left" },
                            }}
                          >
                            {data?.arVr?.map((val: any, linkIndex: any) => (
                              <Box
                                key={linkIndex}
                                component={Link}
                                href={val.url}
                                sx={{
                                  color: "#EAEAEA",
                                  textDecoration: "none",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: { xs: "18px", md: "14px" },
                                    fontWeight: 400,
                                    marginTop: "20px",
                                    marginRight: "5px",
                                  }}
                                >
                                  {val.text}{" "}
                                  {data.arVr.length - 1 === linkIndex
                                    ? ""
                                    : "/"}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        )}

                        {data.socialMedia && (
                          <Box
                            sx={{
                              marginTop: "40px",
                              marginLeft: { xs: "10px", sm: "-6px" },
                            }}
                          >
                            {data.socialMedia.map(
                              (social: any, socialIndex: any) => (
                                <Box
                                  key={socialIndex}
                                  component={Link}
                                  target="_blank"
                                  href={social.url}
                                  sx={{ marginRight: "30px" }}
                                >
                                  <Image
                                    src={social.icon}
                                    alt={`${social.platform} icon`}
                                    width={26}
                                    height={26}
                                  />
                                </Box>
                              )
                            )}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
