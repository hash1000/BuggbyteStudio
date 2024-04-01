import * as React from "react";
import QuestionForm from "@/components/QuestionForm";
import ServiceDetails from "../services-detail/page";
import jsonData from "@/Mock/service-data.json";
import Header from "@/components/Header";

const dataArray = jsonData.nftMetaverse;

export default function Services() {
  return (
    <>
      <Header num={8} url={"/assets/images/common-bg.png"} />
      <ServiceDetails params={dataArray} />
      <QuestionForm />
    </>
  );
}
