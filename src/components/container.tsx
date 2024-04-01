import { ReactNode } from "react";
import { Box } from "@mui/material";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        maxWidth: "1370px",
        width: "100%",
        p: {
          lg: "0 60px",
          md: "0 30px",
          xs: "0 15px",
        },
        m: "auto",
      }}
    >
      {children}
    </Box>
  );
}
