import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import Container from "../container";

const projectInfoImage = {
  "@media (max-width: 600px)": {
    textAlign: "center",
  },
  "@media (min-width: 768px)": {
    marginRight: "20px",
  },
};
const Title = styled(Typography)({
  backgroundImage:
    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
  fontWeight: 700,
  margin: "15px 0px",
  lineHeight: "30px",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const SubTitle = styled(Typography)({
  color: "black",
  fontWeight: 600,

  textAlign: "center",
  textTransform: "uppercase",
  marginTop: "15px",
});
export default function GetPlay() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gap: { xs: "35px", md: "50px", lg: "64px" },
            justifyContent: "center",
            padding: {
              xs: "40px 0px",
              sm: "60px 0px",
              md: "80px 0px",
              lg: "100px 0px",
            },
          }}
        >
          <Box>
            <Title
              sx={{
                fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                textAlign: "center",
              }}
            >
              ANGRY TED’S GAME PLAY
            </Title>
            <SubTitle
              sx={{
                fontSize: { xs: "20px", lg: "25px" },

                lineHeight: { xs: "1.2", md: "1.5" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </SubTitle>
          </Box>

          <Box
            sx={{
              flex: "40%",
              ...projectInfoImage,
              "&  .gameplay-image": {
                "@media (max-width: 1200px)": {
                  width: "auto",
                  height: "100%",
                },
                "@media (max-width: 600px)": {
                  width: "380px",
                  height: "200px",
                },
                "@media (max-width: 400px)": {
                  width: "280px",
                  height: "160px",
                },
              },
            }}
          >
            <Image
              className="gameplay-image"
              src="/assets/images/gameplay.png"
              alt="cartoon-img"
              width={1100}
              height={500}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
