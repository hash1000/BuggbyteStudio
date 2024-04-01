"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "@/utils/Navbar";
import FooterLayout from "@/components/Footer/FooterLayout";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/Footer/CopyRight";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FooterSection } from "@/utils/types";
import Loading from "./Loading";
import Providers from "./providers";

interface MainLayoutProps {
  children: React.ReactNode;
  footerData: FooterSection[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, footerData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Box component="main">
            <Providers>{children}</Providers>
          </Box>
          <FooterLayout>
            <Footer footerData={footerData} />
            <CopyRight />
          </FooterLayout>
          <SpeedInsights />
        </>
      )}
    </>
  );
};

export default MainLayout;
