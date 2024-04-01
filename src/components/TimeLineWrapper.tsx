import { ReactNode } from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TimelineWrapper({ children }: { children: ReactNode }) {
  const matchelg = useMediaQuery("(max-width:1280px)");
  const matchemd = useMediaQuery("(max-width:1180px)");
  const matcheTimeLine = useMediaQuery("(max-width:1028px)");
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "auto",
        maxHeight: { xs: "1500px", sm: "942px" },
        "& .timeline-controls.rc-controls": {
          display: "none",
        },
        "& #timeline-main-wrapper": {
          overflow: "visible",
        },
        "[data-testid='tree-main']": {
          overflowX: "hidden",
          padding: "0.2em",
        },
        "& .vertical-item-row.visible": {
          margin: 0,
        },
        "& .rc-card": {
          animation: " jKVXCn 2.25s ease-in-out",
          backgroundColor: "transparent",
        },
        ".rc-card-title": {
          textAlign: "left",
          fontSize: matchemd ? "30px" : "40px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        header: {
          margin: "0px 10px",
        },
        "& .rc-card-subtitle": {
          marginTop: "10px",
          fontSize: matchemd ? "18px" : "20px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        "& .card-content-wrapper.left > .rc-card": {
          minHeight: "fit-content",
          backgroundColor: "transparent",
        },
        "& .card-content-wrapper.left header> h1": {
          textAlign: "right",
          fontSize: matchemd ? "30px" : "40px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(325deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        "& .card-content-wrapper.left header> h2  ": {
          textAlign: "right",
          backgroundImage:
            " linear-gradient(325deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: matchemd ? "18px" : "20px",
          fontWeight: 600,
          marginTop: "20px",
          marginLeft: "-9px",
        },
        "& .left .card-description ": {
          textAlign: "end",
        },
        "& .card-content-wrapper.right > .rc-card": {
          minHeight: "fit-content",
          backgroundColor: "transparent",
          marginLeft: "10px",
        },
        "& .card-content-wrapper.right header> h1  ": {
          fontSize: matchemd ? "30px" : "40px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginLeft: { xs: "0px", sm: "10px" },
        },
        "& .card-content-wrapper.right header> h2 ": {
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: matchemd ? "18px" : "20px",
          fontWeight: 600,
          marginTop: { xs: "10px", sm: "20px" },
          marginLeft: { xs: "0px", sm: "10px" },
        },
        "& p": {
          color: "#FFF",
          fontSize: matchemd ? "14px" : "18px",
          fontWeight: 400,
        },

        ".right span::before": {
          content: '""',
          height: "0px",
          minWidth: matchemd ? "70px" : matchelg ? "80px" : "90px",
          border: "2px solid white",
          marginRight: "80px",
        },
        ".right span": {
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          left: "-4px",
          top: "calc(10%)",
          transform: "none",
        },
        ".left span::before": {
          content: '""',
          height: "0px",
          minWidth: matchemd ? "70px" : matchelg ? "80px" : "90px",
          border: "2px solid white",
          marginLeft: "80px",
        },
        ".left span": {
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          right: "7px",
          top: "calc(10%)",
          transform: "none",
        },
        "& .vertical-item-row> div:nth-child(3)": {
          margin: matcheTimeLine ? "0%" : "0px 20px",
          width: matcheTimeLine ? "8%" : "10%",
        },

        ...(matcheTimeLine
          ? {
              ".vertical-item-row > div:nth-child(1)": {
                width: matcheTimeLine ? "0%" : "10%",
              },
            }
          : null),
        "& .timeline-vertical-circle": {
          display: "none",
        },
        "& .vertical-item-row> div:nth-child(3)::after": {
          left: matcheTimeLine ? "-3%" : "50%",
          backgroundColor: "#fff",
          width: "7px",
        },
        "& .vertical-item-row> div:nth-child(3)::before": {
          left: matcheTimeLine ? "-3%" : "50%",
          backgroundColor: "#fff",
          width: "6px",
        },
      }}
    >
      {children}
    </Box>
  );
}
