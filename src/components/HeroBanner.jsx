import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import "../styles/HeroBanner.css";
import HeroBannerImage from "../assets/images/banner.png";

export default function HeroBanner() {
  return (
    <Box className="hero--container">
      <Typography className="hero--title" fontSize="26px" fontWeight="600">
        Elevate Fitness
      </Typography>
      <Typography
        fontWeight="700"
        fontSize="40px"
        marginTop="30px"
        marginBottom="20px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="18px" lineHeight="35px" marginBottom={3}>
        Check out the most effective exercises.
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px 30px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.18, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img className="hero--bannerImage" src={HeroBannerImage} alt="banner" />
    </Box>
  );
}
