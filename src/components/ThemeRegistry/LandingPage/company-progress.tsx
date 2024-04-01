"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@/components/container";
import Divider from "@mui/material/Divider";
import { useMediaQuery, useTheme } from "@mui/material";
import { progressData } from "@/utils/types";
import Counter from "@/components/counter";

export default function CompanyProgress() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const companyProgress: progressData[] = [
    {
      title: 1000,
      subtitle: "Total Projects Completed",
    },
    {
      title: 10,
      subtitle: "Projects In-Progress",
    },
    {
      title: 100,
      subtitle: "Talented Team Members",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "1px",
          backgroundSize: { xs: "cover", md: "auto" },
          "&::before": {
            content: '""',
            background: `url(${"/assets/images/progress-bg.png"}) no-repeat 0% 100%`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "30% 100%",
          },
          "&::after": {
            content: '""',
            background: `url(${"/assets/images/progress-bg.png"}) no-repeat 98% 100%`,
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "30% 100%",
          },
        }}
      />
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          padding: {
            lg: "100px 0px",
            xs: "50px 0px",
          },
        }}
      >
        <Container>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              gap: {
                lg: "56px",
                xs: "20px",
              },
              alignItems: "center",
              "@media (max-width: 600px)": {
                flexDirection: "column",
              },
            }}
          >
            {companyProgress?.map((progress, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  gap: "66px",
                  alignItems: "center",
                  "@media (max-width: 1320px)": {
                    gap: "30px",
                    "& .progress-title": {
                      fontSize: "70px",
                    },
                    "& .progress-subtitle": {
                      fontSize: "26px",
                    },
                  },
                  "@media (max-width: 1100px)": {
                    "& .progress-title": {
                      fontSize: "50px",
                    },
                    "& .progress-subtitle": {
                      fontSize: "20px",
                    },
                  },
                  "@media (max-width:600px)": {
                    flexDirection: "column",
                  },
                }}
              >
                <Box>
                  <Box>
                    <Counter value={progress.title} />
                  </Box>
                  <Typography
                    className="progress-subtitle"
                    sx={{
                      fontSize: "32px",
                      fontWeight: 500,
                    }}
                  >
                    {progress.subtitle}
                  </Typography>
                </Box>
                {index !== companyProgress.length - 1 && (
                  <Divider
                    orientation={matchesSM ? "horizontal" : "vertical"}
                    sx={{
                      height: "141.5px",
                      width: "1px",
                      borderImage:
                        "linear-gradient(88deg, rgba(5, 14, 24, 0), rgba(6, 19, 32, 1), rgba(4, 13, 22, 0))",
                      borderImageSlice: 1,
                      "@media (max-width:600px)": {
                        height: "1px",
                        width: "180px",
                      },
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
