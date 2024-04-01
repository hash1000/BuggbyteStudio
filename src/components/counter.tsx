"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Box, Typography } from "@mui/material";

export default function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [formattedValue, isFormattedValue] = useState(0);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 1000,
    stiffness: 1000,
    duration: 0.5,
  });
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      isFormattedValue(
        latest >= 1000 ? "1K+" : latest >= 100 ? "100+" : latest.toFixed(0)
      );
    });
  }, [formattedValue, springValue]);

  return (
    <Typography
      className="progress-title"
      sx={{
        textShadow: "20px 15px 80px rgba(0, 0, 0, 0.10)",
        fontSize: "100px",
        fontWeight: 700,
        background:
          "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      ref={ref}
    >
      {formattedValue}
    </Typography>
  );
}
