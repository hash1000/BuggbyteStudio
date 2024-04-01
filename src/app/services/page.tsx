"use client";

import * as React from "react";
import Container from "@/components/container";
import QuestionForm from "@/components/QuestionForm";
import Offering from "@/components/services/Offering";
import Work from "@/components/services/Work";
import Header from "@/components/Header";

export default function Service() {
  return (
    <>
     <Header num={2} url={"./assets/images/services-header-bg.png"}/>
      <Offering />
      <Work />
      <QuestionForm />
    </>
  );
}
