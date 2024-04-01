"use client";

import React, { useEffect, useState } from "react";
import Container from "../container";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import PortfolioData from "@/Mock/portfolio.json";
import { portfolio } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";

const Portfolio: portfolio[] = PortfolioData;

export default function ImageMasonry() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedValue, setSelectedValue] = useState("all");
  const [filteredPortfolioLength, setFilteredPortfolioLength] = useState(0);
  const [portfolioNumber, setportfolioNumber] = useState(6);

  useEffect(() => {
    const filteredPortfolio = Portfolio.filter(
      (portfolio) =>
        portfolio.categories.includes(selectedValue) || selectedValue === "all"
    );
    setFilteredPortfolioLength(filteredPortfolio.length);
    setportfolioNumber(6);
  }, [activeTab, selectedValue]);
  const handleTabClick = (value: any) => {
    setSelectedValue(value);
  };

  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };
  const tabStyles = {
    color: "#030A12 !important",
    fontSize: "22px",
    fontWeight: 400,
    lineHeight: "24.42px",
    textTransform: "capitalize",
  };
  const activeTabStyles = {
    color: "#FE7624 !important",
  };

  const indicatorStyles = {
    backgroundColor: "#FE7624 !important",
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: {xs: "15px", sm: "25px", md: "30px", lg: "40px"},
          marginBottom: {xs: "20px", md: "50px", lg: "80px"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            ...tabStyles,
            "& .MuiTabs-scroller": {
              borderBottom: "1px solid #DADADA",
            },
            "& .Mui-selected": activeTabStyles,
            "& .MuiTabs-indicator": indicatorStyles,
          }}
        >
          <Tab
            sx={{...tabStyles}}
            label="All"
            onClick={() => handleTabClick("all")}
          />
          <Tab
            sx={{...tabStyles, ml: 2}}
            label="Digital Twins"
            onClick={() => handleTabClick("digital-twins")}
          />
          <Tab
            sx={{...tabStyles, ml: 2}}
            label="AR/VR"
            onClick={() => handleTabClick("ar-vr")}
          />
          <Tab
            sx={{...tabStyles, ml: 2}}
            label="Unity Development"
            onClick={() => handleTabClick("unity")}
          />
          <Tab
            sx={{...tabStyles, ml: 2}}
            label="Metaverse"
            onClick={() => handleTabClick("metaverse")}
          />
          {/* <Tab
            sx={{ ...tabStyles, ml: 2 }}
            label="NFT"
            onClick={() => handleTabClick("nft")}
          /> */}
          <Tab
            sx={{ ...tabStyles, ml: 2 }}
            label="Blockchain"
            onClick={() => handleTabClick("blockchain")}
          />
        </Tabs>
      </Box>
      <Box>
        <ResponsiveMasonry columnsCountBreakPoints={{200: 1, 700: 2}}>
          <Masonry gutter="20px">
            {Portfolio.filter(
              (portfolio) =>
                portfolio.categories.includes(selectedValue) ||
                selectedValue === "all"
            )
              .slice(0, portfolioNumber)
              .map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    overflowX: "hidden",
                    "&:hover": {
                      ".hover-box": {
                        visibility: "visible",
                        opacity: 1,
                        transition: "all 0.3s ease-in-out",
                      },
                    },
                    "& .portfolio-image": {
                      minHeight: "250px",
                      "@media (max-width: 1100px)": {
                        width: "100%",
                        height: "auto",
                      },
                    },
                  }}
                >
                  <Image
                    className="portfolio-image"
                    src={item.img}
                    alt="portfolio-item"
                    loading="lazy"
                    width={item.size.width}
                    height={item.size.height}
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                      height: "auto",
                      backgroundSize: "cover",
                    }}
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
                          width: " 90%",
                          height: "90%",
                          display: "grid",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            textAlign: "center",
                            margin: {sm: "0px 15px", md: "0px 30px"},
                            opacity: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FFF",
                              fontSize: {xs: "20px", sm: "18px"},
                              fontWeight: 600,
                            }}
                          >
                            {item.subHeading}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#FFF",
                              fontSize: {
                                xs: "30px",
                                sm: "30px",
                                md: "40px",
                                lg: "55px",
                              },
                              fontWeight: 600,
                              textTransform: "capitalize",
                              marginTop: {xs: "3px", sm: "5px"},
                              lineHeight: {xs: "1.3", sm: "1"},
                            }}
                          >
                            {item.heading}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#FFF",
                              fontSize: {xs: "16px", sm: "16px", md: "18px"},
                              fontWeight: 500,
                              lineHeight: {xs: "1.2", sm: "1"},
                              textTransform: "capitalize",
                              marginTop: {sm: "6px", md: "10px"},
                            }}
                          >
                            {item.description}
                          </Typography>
                          <Box component={Link} href={`portfolio/${item.link}`}>
                            <Button
                              sx={{
                                marginTop: {xs: "8px", md: "10px"},
                                padding: {
                                  xs: "5px 15px",
                                  sm: "10px 30px",
                                  md: "13px 35px",
                                  lg: "16px 42px",
                                },
                                borderRadius: "5px",
                                backgroundColor: "white",
                                fontSize: {xs: "18px", md: "24px"},
                                fontWeight: 600,
                                textTransform: "capitalize",
                                color: "#F04B12",
                                whiteSpace: "nowrap",
                                maxWidth: "fit-content",
                                "&:hover": {
                                  backgroundColor: "white",
                                  padding: {
                                    xs: "8px 20px",
                                    sm: "12px 40px",
                                    md: "14px 37px",
                                    lg: "17px 46px",
                                  },
                                  fontSize: {xs: "20px", md: "26px"},
                                  transition: "all .3s ease-in-out",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              View Details
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          component={motion.div}
          whileHover={{scale: 1.1, y: -10}}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
        >
          <Button
            sx={{
              display: filteredPortfolioLength > 6 ? "block" : "none",
              position: "relative",
              marginTop: {xs: "20px", md: "25px", lg: "40px"},
              borderRadius: "6px",
              width: {xs: "150px", sm: "180px", md: "206px"},
              height: {xs: "35px", sm: "38px", md: "48px"},
              fontSize: {xs: "14px", md: "16px"},
              fontWeight: {xs: 400, md: 600},
              background:
                "linear-gradient(94deg, #C73300 10.11%, #F86910 89.7%)",
              boxShadow: "20px 25px 50px 0px rgba(0, 0, 0, 0.30)",
              color: "#fff",
            }}
            onClick={() => setportfolioNumber(portfolioNumber + 6)}
          >
            View All Projects
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
