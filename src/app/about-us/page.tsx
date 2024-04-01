"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import CompanyProgress from "@/components/ThemeRegistry/LandingPage/company-progress";
import Service from "@/components/about-us/service";
import QuestionForm from "@/components/QuestionForm";
import Company from "@/components/about-us/company";
const TimeLineSection = dynamic(
  () => import("@/components/about-us/timeline-section"),
  { ssr: false }
);

export default function About() {
  return (
    <>
      <Header num={1} url={"/assets/images/about-us-bg.png"} />
      <Company />
      <Service />
      <CompanyProgress />
      <TimeLineSection />
      <QuestionForm />
    </>
  );
}
