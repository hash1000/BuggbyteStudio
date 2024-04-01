"use client";

import React, {useEffect, useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import GameCard from "@/components/Cards/game-experience-card";
import Container from "@/components/container";
import {GameExperience} from "@/utils/types";
import GameExperenceData from "../../Mock/GameExperenceData.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const GameCardData: GameExperience[] = GameExperenceData;

export default function GameExperienceSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [filteredGameCardData, setFilteredGameCardData] =
    useState(GameCardData);

  const [selectedValue, setSelectedValue] = useState("all");

  useEffect(() => {
    const filteredCardData = GameCardData.filter(
      (GameCardData) =>
        GameCardData.tags.includes(selectedValue) || selectedValue === "all"
    );
    setFilteredGameCardData(filteredCardData);
  }, [activeTab, selectedValue]);
  const handleTabClick = (value: any) => {
    setSelectedValue(value);
  };

  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };
  const navigationel = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  const hollowArrowStyles = {
    borderRadius: "50%",
    backgroundColor: "transparent",
    color: "#030A11",
    cursor: "pointer",
    border: "2px solid #030A11",
    textAlign: "center",
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
    <Box
      sx={{
        "& .swiper-slide": {
          visibility: "hidden",
        },
        "& .swiper-slide.swiper-slide-active, & .swiper-slide.swiper-slide-next":
          {
            visibility: "visible",
          },

        "& .swiper": {
          overflow: "visible",
        },
        "& .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after": {
          fontSize: "16px",
        },
        "& .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after": {
          fontSize: "16px",
        },
      }}
    >
      <Container>
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <Box
            data-aos="fade-down"
            sx={{
              marginBottom: {xs: "30px", sm: "30px", lg: "40px"},
              marginTop: {xs: "20px", sm: "30px", lg: "30px"},
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
                label="Unity Development"
                onClick={() => handleTabClick("unity")}
              />
              <Tab
                sx={{...tabStyles, ml: 2}}
                label="AR/VR"
                onClick={() => handleTabClick("ar-vr")}
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
                sx={{...tabStyles, ml: 2}}
                label="blockchain"
                onClick={() => handleTabClick("blockchain")}
              />
            </Tabs>
          </Box>
          <Box
            sx={{
              p: {
                xs: "0px 40px 0px 40px",
                sm: "0px 80px 0px 80px",
                md: "0px 80px 0px 80px",
              },
            }}
          >
            <Swiper
              loop
              navigation={navigationel}
              className="swiper-main"
              modules={[Autoplay, Navigation]}
              onSwiper={(swiper) => {
                setActiveSlideIndex(swiper.activeIndex);
              }}
              breakpoints={{
                1100: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 100,
                },
              }}
            >
              {filteredGameCardData?.map((gameExp, index) => (
                <SwiperSlide key={index}>
                  <GameCard gameExperience={gameExp} />
                </SwiperSlide>
              ))}
              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  justifyContent: "space-between",
                  width: {xs: "fit-content", sm: "auto"},
                  margin: "auto",
                  position: "relative",
                  top: {xs: "60px", sm: "-190px", md: "-300px"},
                }}
              >
                <Box
                  className="swiper-button-prev"
                  sx={{
                    position: {xs: "unset", sm: "relative"},
                    left: "-80px",
                    width: {xs: "30px", sm: "40px"},
                    height: {xs: "30px", sm: "40px"},
                    ...hollowArrowStyles,
                  }}
                ></Box>
                <Box
                  className="swiper-button-next"
                  sx={{
                    position: {xs: "unset", sm: "relative"},
                    right: "-70px",
                    width: {xs: "30px", sm: "40px"},
                    height: {xs: "30px", sm: "40px"},
                    ...hollowArrowStyles,
                  }}
                ></Box>
              </Box>
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
