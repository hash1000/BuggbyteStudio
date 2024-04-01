"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import titleData from "../../Mock/title.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartoonMotion = {
  rest: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const Services: string[] = titleData;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const matchemd = useMediaQuery("(max-width:650px)");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);

    try {
      setIsLoading(true);

      const response = await axios.post("/api/send", formData);

      if (response.status === 200) {
        setIsSuccess(true);
        toast.success("Email sent successfully!", {
          position: "bottom-right",
        });
        console.log("Email sent successfully!");
      } else {
        toast.error("Failed to send email", {
          position: "bottom-right",
        });
        console.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Error sending email");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        minWidth: { xs: "100%", md: "687px" },
        minHeight: { xs: "100%", sm: "655px" },
      }}
    >
      <ToastContainer />
      <Box
        component={motion.div}
        initial="rest"
        variants={cartoonMotion}
        animate={isInView ? "animate" : undefined}
        sx={{
          position: "absolute",
          minWidth: { sm: "100%", md: "687px" },
          minHeight: { xs: "100%", sm: "655px" },
          backgroundImage: matchemd
            ? "none"
            : `url(${"/assets/images/question-form-bg.png"})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box
        data-aos="fade-up"
        sx={{
          position: "relative",
          marginLeft: { xs: "auto", sm: "13%" },
          marginTop: { xs: "0%", sm: "22%" },
          marginRight: "auto",
          maxWidth: { xs: "420px", lg: "450px" },
          height: "100%",
          backgroundColor: "#0B1D30",
          padding: { xs: "8px 15px", sm: "10px 20px", md: "20px 32px" },
          borderRadius: "8px",
          "& .MuiInputBase-root": {
            borderRadius: "10px",
            borderColor: "red",
          },
          "& .mui-sm7gn3-MuiInputBase-root-MuiOutlinedInput-root": {
            padding: {
              xs: "8.5px 6px",
              sm: "14.5px 12px",
              md: "16.5px 14px",
            },
          },

          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ": {
            borderColor: "white !important",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
            padding: { xs: "12.5px 10px", sm: "" },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& fieldset": {
            borderColor: "white",
          },
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        <Box
          component={"form"}
          sx={{
            display: "grid",
            borderRadius: "8px",
            paddingBottom: "10px",

            "& .input-field": {
              marginTop: { xs: "9px", sm: "16px" },
              marginBottom: { xs: "4px", sm: "8px" },
            },
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            className="input-field"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            className="input-field"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <FormControl
            className="input-field"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          >
            <InputLabel id="service-label">Service</InputLabel>
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
          <TextField
            className="input-field"
            label="Enter Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <Button
            sx={{
              borderRadius: "10px",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              marginTop: { xs: "10px", sm: "15px" },
              height: "50.955px",
              fontSize: "18px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#F86910",
              },
            }}
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading}
          >
            {!isLoading ? (
              "Send"
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
        </Box>
      </Box>
    </Box>
  );
}
