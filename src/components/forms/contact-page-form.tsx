"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Divider,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import titleData from "../../Mock/title.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import watch from "@/public/assets/images/watch.svg";
import phone from "@/public/assets/images/phone.svg";
import message from "@/public/assets/images/msgSmall.svg";
import Container from "../container";
import Link from "next/link";

const socialMediaLinks = [
  {
    platform: "Facebook",
    icon: "/assets/social-media-icons/facebook.svg",
    url: "https://www.facebook.com/profile.php?id=61555682863123",
  },
  {
    platform: "Instagram",
    icon: "/assets/social-media-icons/insta.svg",
    url: "https://www.instagram.com/buggbyte_studios/",
  },
  {
    platform: "LinkedIn",
    icon: "/assets/social-media-icons/linkdin.svg",
    url: "https://www.linkedin.com/company/buggbyte-studios/about/",
  },
];

const formVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const cardVariants = {
  initial: { x: 500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Services: string[] = titleData;

export default function ContactFormSection(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success Notification !", {
        position: "bottom-right",
      });
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post("/api/send", formData);

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", service: "", message: "" });
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email");
        toast.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email", {
        position: "bottom-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ background: "#fff", width: "100%" }}>
      <Container>
        <ToastContainer />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              marginTop: "100px",
              color: "#0A1928",
            }}
          >
            Have Questions?
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "24px", sm: "36px" },
              fontWeight: { xs: 500, sm: 700 },
              lineHeight: "41px",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Are You Looking For ? <br /> Contact us
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            background: "#fff",
            padding: "0 0 160px 0",
            marginTop: "-1px",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              background: "#0B1D30",
              padding: { xs: "1.5rem 1rem", sm: "1.5rem 2rem" },
              minHeight: { sm: "700px", md: "760.371px" },
              marginTop: { xs: "2rem", sm: "2rem", md: "5rem" },
              mb: 3,
              borderRadius: "10px",
              maxWidth: "675px",
              "& .MuiFormLabel-root": {
                color: "#FFFFFF",
              },
              "& .MuiInputBase-root": {
                borderRadius: "10px",
                border: "1px solid #333",
                borderColor: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
              "& label.Mui-focused": {
                color: "#F86910",
              },
              "& input": {
                color: "white",
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
          >
            <FormLabel
              component={motion.form}
              variants={formVariants}
              initial="initial"
              animate="animate"
              sx={{
                fontSize: { xs: "26px", sm: "32px" },
                fontWeight: { xs: 500, sm: 700 },
                lineHeight: { xs: "20.4px", sm: "38.4px" },
                color: "#fff",
                textTransform: "capitalize",
                marginTop: { xs: "1rem", sm: "3rem" },
              }}
            >
              Write A Message
            </FormLabel>
            <form
              style={{
                borderRadius: "8px",
                width: "100%",
                marginTop: "1.5rem",
              }}
              onSubmit={(e) => handleSubmit(e)}
            >
              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: { xs: "20px", sm: "24px" },
                }}
              >
                Name
              </FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
              />
              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                Email
              </FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                required
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              />

              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                Service
              </FormLabel>
              <FormControl
                variant="outlined"
                fullWidth
                margin="normal"
                required
              >
                <Select
                  label="Service"
                  labelId="service-label"
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value as string,
                    })
                  }
                >
                  {Services.map((service, index) => (
                    <MenuItem value={service} key={index}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                {" "}
                Leave us a message
              </FormLabel>

              <TextField
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
              />
              <Button
                sx={{
                  mt: 2,
                  mb: { xs: 2, sm: 4 },
                  borderRadius: "5px",
                  width: { xs: "100%", sm: "167px" },
                  height: "48px",
                  fontSize: "18px",
                  fontWeight: 600,
                  background:
                    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                }}
                type="submit"
                variant="contained"
                disabled={isLoading}
              >
                {!isLoading ? (
                  "Send Message"
                ) : (
                  <CircularProgress
                    variant="indeterminate"
                    size={25}
                    sx={{
                      color: "white",
                    }}
                  />
                )}
              </Button>
            </form>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              background: "#0B1D30",
              padding: { xs: "1.5rem 1rem", sm: "1.5rem 2rem" },
              marginTop: { xs: "1rem", sm: "2rem", md: "5rem" },
              mb: 3,
              height: { sm: "700px", md: "760.371px" },
              borderRadius: "10px",
              color: "#fff",
              marginLeft: { xs: "20px", sm: "50px", md: 0 },
              marginRight: { xs: "20px", sm: "50px", md: 0 },
              maxWidth: "545px",
            }}
          >
            <Typography
              component={motion.p}
              variants={cardVariants}
              sx={{
                fontSize: { xs: "26px", sm: "32px" },
                fontWeight: { xs: 500, sm: 600 },
                lineHeight: "38.4px",
                textTransform: "capitalize",
                marginTop: { xs: "1rem", sm: "3rem" },
              }}
            >
              Get in Touch
            </Typography>
            <Divider
              sx={{
                my: { xs: "1rem", sm: "1.5rem", md: "2.1rem" },
                width: "100%",
                strokeWidth: "0.5px",
                border: "1px #C8C8C8 solid",
              }}
            />

            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Image src={message.src} width={24} height={24} alt="location" />
              <Box sx={{ marginLeft: "37px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: { xs: 500, sm: 600 },
                  }}
                >
                  Email Address
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 400,
                  }}
                >
                  hello@buggbytestudios.com
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                my: { xs: "1rem", sm: "1.5rem", md: "2.1rem" },
                width: "100%",
                strokeWidth: "0.5px",
                border: "1px #C8C8C8 solid",
              }}
            />

            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Image src={phone.src} width={26} height={24} alt="location" />
              <Box sx={{ marginLeft: "37px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: { xs: 500, sm: 600 },
                  }}
                >
                  Phone Number
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 400,
                  }}
                >
                  +971542990227
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                my: { xs: "1rem", sm: "1.5rem", md: "2.1rem" },
                width: "100%",
                strokeWidth: "0.5px",
                border: "1px #C8C8C8 solid",
              }}
            />

            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Image src={watch.src} width={24} height={24} alt="location" />
              <Box sx={{ marginLeft: "37px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: { xs: 500, sm: 600 },
                  }}
                >
                  Working Hours
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 400,
                  }}
                >
                  Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend
                </Typography>
              </Box>
            </Box>
            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { xs: "2rem", sm: "3.5rem" },
                width: "100%",
                gap: "27px",
                mb: 10,
              }}
            >
              {socialMediaLinks.map((link, index) => (
                <Link key={index} target="_blank" href={link.url} passHref>
                  <Image
                    src={link.icon}
                    width={35}
                    height={35}
                    alt={link.platform}
                  />
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
