"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import callSvg from "@/public/assets/images/call.svg";
import messageSvg from "@/public/assets/images/message.svg";

export default function ContactForm() {
  return (
    <Box
      sx={{
        maxWidth: "1250px",
        m: "auto",
        padding: "5.3rem 0",
        alignItems: "center",
        backgroundImage: `url("/assets/images/contact-bg-image.png")`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1099.736px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            flex: { xs: "100%", md: "60%" },
            display: "grid",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#F86910",
                fontSize: "22px",
                fontWeight: 400,
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              Have Questions?
            </Typography>
            <Typography
              sx={{
                color: "#EAEAEA",
                fontSize: "42px",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              We&apos;d Love To Hear From You
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#EAEAEA",
                fontSize: "18px",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              Please fill out the form and let us know about your concerns.We
              will
              <br /> try our best to provide optimized solutions.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Image src={callSvg.src} alt="call" />
              <Typography
                sx={{
                  color: "#EAEAEA",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                +(2) 578 - 365 - 379
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Image src={messageSvg.src} alt="message" />
              <Typography
                sx={{
                  color: "#EAEAEA",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Hello@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: { xs: "100%", md: "60%" },
          }}
        >
          <Box
            sx={{
              flex: "40%",
              padding: "32px 25px",
              borderRadius: "10px",
              backgroundColor: "#EAEAEA",
              display: "grid",
              gap: "20px",
            }}
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Service" variant="outlined" />
            <TextField
              placeholder="MultiLine with rows: 2 and rowsMax: 4"
              multiline
              rows={5}
            />
            <Button
              sx={{
                borderRadius: "10px",
                background: "#F86910",
                color: "#FFFFFF",
                paddingTop: "13px",
                paddingBottom: "13px",
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
