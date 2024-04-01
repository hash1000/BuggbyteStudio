
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "./globals.css";
import FooterData from "../Mock/FooterData.json";
import { FooterSection } from "@/utils/types";
import { Metadata } from 'next';
import MainLayout from "./mainLayout";


export const metadata: Metadata = {
  title: "Buggbyte studios",
  description:
    "BuggByte Studio is your gaming hub for Unity, Unreal, AR, VR, Metaverse, Blockchain, NFTs, and Virtual Real Estate. Experience the next level of fun with our console gaming creations – where innovation meets playtime excitement!",
};

const footerData: FooterSection[] = FooterData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Box
        component={"body"}
        sx={{
          backgroundColor: "#000",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(112deg, rgba(23, 69, 113, 0.30) -13.12%, rgba(0, 0, 0, 0.30) 123.07%)",
          }}
        >
          <ThemeRegistry>
          <MainLayout footerData={footerData}>{children}</MainLayout>
          </ThemeRegistry>
        </Box>
      </Box>
    </html>
  );
}
