"use client";

import { Box } from "@mui/material";
import React from "react";
import { Chrono } from "react-chrono";
import TimelineWrapper from "../TimeLineWrapper";
import TimeLineItems from "@/Mock/TimeLineItems.json" 
import { TimeLineType } from "@/utils/types";

export default function TimeLine() {
  const items:TimeLineType[] = TimeLineItems;

  return (
    <>
      <TimelineWrapper>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          slideShow
          scrollable={{ scrollbar: false }}
        />
      </TimelineWrapper>
    </>
  );
}
