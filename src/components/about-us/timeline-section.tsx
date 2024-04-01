import { Box, Hidden, Typography, styled } from "@mui/material";
import React from "react";
import TimeLine from "./timeline";
import Container from "../container";

export default function TimeLineSection() {
  const Title = styled(Typography)({
    backgroundImage:
      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
    fontWeight: 700,
    lineHeight: "30px",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });
  return (
    <Box
      sx={{
        marginTop: { xs: "2rem", sm: "4rem", md: "6rem", lg: "8rem" },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Title
            sx={{
              fontSize: { xs: "20px", sm: "30px", lg: "40px" },
              textAlign: "center",
            }}
          >
            WHY BUGGBYTES STUDIOS?
          </Title>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "18px", sm: "24px" },
              fontWeight: { xs: 300, sm: 400 },
              textAlign: "center",
              color: "white",
            }}
          >
            Our solutions are tailored to your unique needs.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: {
              xs: "15px 0px",
              sm: "30px 0px",
              md: "60px 0px",
              lg: "90px 0px",
            },
          }}
        >
          <TimeLine />
        </Box>
      </Container>
    </Box>
  );
}
