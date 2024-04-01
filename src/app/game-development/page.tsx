import * as React from "react";
import QuestionForm from "@/components/QuestionForm";
import ServiceDetails from "../services-detail/page";
import jsonData from "@/Mock/service-data.json";
import Header from "@/components/Header";

// Extract the data array
const dataArray = jsonData.serviceDetail;

export default function Services() {
  return (
    <>
      
    <Header num={11} url={"/assets/images/common-bg.png"}/>
      <ServiceDetails params={dataArray} />
      <QuestionForm />
    </>
  );
}
