"use client";

import * as React from "react";
import HeroSlider from "@/components/ThemeRegistry/LandingPage/hero-slider";
import ProjectWithUs from "@/components/ThemeRegistry/LandingPage/project-withus";
import Sponser from "@/components/ThemeRegistry/LandingPage/sponser";
import CompanyProgress from "@/components/ThemeRegistry/LandingPage/company-progress";
import GameExperience from "@/components/game-experience-section";
import TestimonialSection from "@/components/testmonial-slider-section";
import Help from "@/components/Content/Help";
import QuestionForm from "@/components/QuestionForm";
import NextLevelServicesProvider from "@/components/next-level-services-provider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <HeroSlider />
      <Help />
      <ProjectWithUs />
      <Sponser />
      <GameExperience />
      <NextLevelServicesProvider />
      <CompanyProgress />
      {/* <TestimonialSection /> */}
      <QuestionForm />
    </>
  );
}
