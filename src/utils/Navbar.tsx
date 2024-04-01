"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {styled, useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useMediaQuery} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";

const LINKS = [
  {text: "About us", href: "/about-us"},
  {text: "Services", href: "/services"},
  {text: "Portfolio", href: "/portfolio"},
  {text: "Contact Us", href: "/contact-us"},
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 100);
      });
    }
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavAppBar = styled(AppBar)({
    position: "fixed",
    color: "white",
    background: scroll ? "rgba( 21, 20, 20, 0.35 )" : "transparent",
    boxShadow: scroll ? "0px 0px" : "0px 0px",
    backdropFilter: scroll ? "blur( 18.5px )" : "blur( 0px )",
    padding: "0",
    minHeight: "auto",
    height: "auto",
    transition: "0.3s all",
  });

  const NavToolbar = styled(Toolbar)({
    padding: "25px !important",
    minHeight: "auto",
    position: "relative",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1370px",
    flexWrap: "nowrap",
    width: "100%",
    margin: "auto",
  });

  return (
    <NavAppBar>
      <NavToolbar
        sx={{
          px: {
            lg: "60px !important",
            md: "30px !important",
            xs: "15px !important",
          },
        }}
      >
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Box component={Link} href={"/"}>
            <Image
              priority={true}
              className="brand-logo"
              src="/assets/images/logo.png"
              width={185}
              height={55}
              alt="bugg byte"
            />
          </Box>
        </Box>
        <Box sx={{display: {xs: "block", md: "none"}}}>
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            sx={{
              color: "white",
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: {xs: "none", md: "flex"},
            alignItems: "center",
            gap: {md: "30px", lg: "55px"},
          }}
        >
          {LINKS.map(({text, href}, index) => (
            <ListItem
              key={index}
              sx={{
                width: "auto",
                p: 0,
              }}
            >
              <Box
                component={Link}
                href={href}
                sx={{
                  p: 0,
                  textDecoration: "none !important",
                  "& span:hover": {
                    backgroundImage:
                      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "0.3s all",
                  },
                  ...(pathname === href && {
                    backgroundImage:
                      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "8px",
                    transition: "0.3s all",
                  }),
                }}
              >
                <ListItemText
                  className="list-item-text"
                  primary={text}
                  sx={{
                    color: "#EAEAEA",
                    "& span": {
                      fontSize: "20px",
                    },
                  }}
                />
              </Box>
            </ListItem>
          ))}
        </Box>
        <Box
          component={motion.a}
          whileHover={{scale: 1.1, y: -10}}
          transition={{type: "spring", stiffness: 400, damping: 10}}
          href="/contact-us"
          sx={{
            textDecoration: "none",
            display: {xs: "none", md: "block"},
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              p: {
                md: "7px 32px",
                xs: "7px 28px",
              },
              fontSize: matchesMd ? "14px" : "18px",
              fontWeight: matchesSM ? 200 : 400,
              marginLeft: 2,
              ml: matchesMd ? "-7px" : 0,
              display: {xs: "none", md: "flex"},
              borderRadius: "6px",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              textTransform: "capitalize",
            }}
            endIcon={
              <ArrowOutwardIcon
                sx={{
                  ml: "10px",
                }}
              />
            }
          >
            Get Started
          </Button>
        </Box>
      </NavToolbar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{width: "100%"}}>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <HighlightOffIcon
              sx={{
                m: "25px",
                cursor: "pointer",
              }}
              fontSize="large"
              onClick={toggleDrawer}
            />
          </Box>
          {LINKS.map(({text, href}) => (
            <ListItem key={href} sx={{maxWidth: "fit-content"}}>
              <ListItemButton
                component={motion.a}
                whileHover={{scale: 1, y: -10}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
                href={href}
                onClick={toggleDrawer}
                sx={{
                  borderRadius: "8px",
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Button
            component={motion.a}
            whileHover={{y: -10}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
            color="primary"
            href="/contact-us"
            sx={{
              marginTop: 2,
              marginLeft: 4,
              width: "194px",
              height: "56px",
              display: "flex",
              borderRadius: "6px",
              color: "white",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              mb: 2,
            }}
            onClick={toggleDrawer}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 4000,
              }}
            >
              Get Started
            </span>
          </Button>
        </Box>
      </Drawer>
    </NavAppBar>
  );
};

export default Navbar;
