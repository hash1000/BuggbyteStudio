"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import callSvg from "@/public/assets/images/call.svg";
import magBoxSvg from "@/public/assets/images/message.svg";
import Image from "next/image";
import Container from "./container";
import dynamic from "next/dynamic";
import Link from "next/link";

const ContactForm = dynamic(() => import("./forms/contact-form"), {
  ssr: false,
});

export default function QuestionForm() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${"/assets/images/contact-bg-image.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: {
            xs: "5rem 0px",
            sm: "7rem 0px",
            md: "8rem 0px",
            lg: "10rem 0px",
          },
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { xs: "center", lg: "space-between" },
              alignItems: "center",
              gap: { xs: "3rem 0px", sm: "5rem 0px", md: "8rem 0px", lg: "0" },
            }}
          >
            <Box
              data-aos="fade-right"
              sx={{
                paddingLeft: { md: "30px", lg: "60px" },
                alignSelf: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: "380px",
                }}
              >
                <Typography
                  sx={{
                    color: "#F03E18",
                    fontSize: "22px",
                    fontWeight: 400,
                    letterSpacing: "0.44px",
                    textTransform: "uppercase",
                    maxWidth: "380px",
                  }}
                >
                  Have Questions?
                </Typography>
                <Typography
                  sx={{
                    color: "#05111C",
                    fontSize: "42px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginTop: "14px",
                    letterSpacing: "0.84",
                    lineHeight: "85%",
                  }}
                >
                  We&apos;d Love To Hear From You
                </Typography>
              </Box>

              <Box
                sx={{
                  marginTop: "44px",
                }}
              >
                <Typography
                  sx={{
                    color: "#05111C",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "124%",
                    maxWidth: "540px",
                  }}
                >
                  Please fill out the form and let us know about your
                  concerns. We will try our best to provide optimized solutions.
                </Typography>
                <Box
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  sx={{
                    marginTop: "30px",
                  }}
                >
                  <Box
                    component={Link}
                    href={"tel:+971542990227"}
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <Image
                      src={callSvg.src}
                      alt="call-icon"
                      width={50}
                      height={50}
                    />
                    <Typography
                      sx={{
                        color: "#06111C",
                        fontSize: { xs: "15px", sm: "18px" },
                        fontWeight: 600,
                      }}
                    >
                      +971542990227
                    </Typography>
                  </Box>
                  <Box
                    component={Link}
                    href={"mailto:hello@Buggbytestudios.com"}
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      marginTop: "30px",
                      textDecoration: "none",
                    }}
                  >
                    <Image
                      src={magBoxSvg.src}
                      alt="call-icon"
                      width={50}
                      height={50}
                    />
                    <Typography
                      sx={{
                        color: "#06111C",
                        fontSize: { xs: "15px", sm: "18px" },
                        fontWeight: 600,
                      }}
                    >
                      hello@Buggbytestudios.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <ContactForm />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
