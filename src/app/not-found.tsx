import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      id="notfound"
      sx={{
        position: "relative",
        height: "100vh",
      }}
    >
      <Box
        className="notfound"
        sx={{
          maxWidth: "767px",
          width: "100%",
          lineHeight: 1.4,
          textAlign: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Box
          className="notfound-404"
          sx={{
            position: "relative",
            height: "180px",
            mb: "20px",
            zIndex: -1,
            "& h1": {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              fontSize: "224px",
              fontWeight: 900,
              marginTop: 0,
              marginBottom: 0,
              ml: "-12px",
              color: "#030005",
              textTransform: "uppercase",
              textShadow: "-1px -1px 0 #8400ff, 1px 1px 0 #ff005a",
              letterSpacing: "-20px",
              "@media (max-width: 480px)": {
                fontSize: "182px",
              },
            },
            "& h2": {
              position: "absolute",
              left: 0,
              right: 0,
              top: "110px",
              fontSize: "42px",
              fontWeight: 700,
              color: "#fff",
              textTransform: "uppercase",
              textShadow: "0 2px 0 #8400ff",
              letterSpacing: "13px",
              margin: 0,
              "@media (max-width: 767px)": {
                fontSize: "24px",
              },
            },
          }}
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h2">Page not found</Typography>
        </Box>
        <Box
          component={Link}
          href="/"
          sx={{
            display: "inline-block",
            textTransform: "uppercase",
            color: "#ff005a",
            textDecoration: "none",
            border: "2px solid",
            background: "0 0",
            padding: "10px 40px",
            fontSize: "14px",
            fontWeight: 700,
            transition: ".2s all",
          }}
        >
          Return Home
        </Box>
      </Box>
    </Box>
  );
}
