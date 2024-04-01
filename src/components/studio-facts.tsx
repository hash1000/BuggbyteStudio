"use client";

import {Box, Typography} from "@mui/material";
import Container from "./container";

const StudioFacts = () => {
  return (
    <Container>
      <Box
        sx={{
          my: "100px",
          borderRadius: "20px",
          background: "rgba(0,0,0, 0.4)",
          padding: "63px 110px",
          color: "white",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "575px",
            m: "auto",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#FE7624",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "4.34px",
              textTransform: "uppercase",
            }}
          >
            BUGBYTES
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#FFF",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            OUR STUDIO FACTS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#FFF",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "25px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "-100px",
            marginTop: "50px",
          }}
        >
          {[1, 2, 3].map((num, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "10px",
                background:
                  "linear-gradient(95deg, #F04B12 1.59%, #FC8C46 100%)",
                boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.15)",
                p: "35px",
                maxWidth: "272px",
              }}
            >
              Lorem ipsum {index}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default StudioFacts;
