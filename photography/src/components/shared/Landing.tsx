import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bg from  "../../../public/images/landing.webp"

const LandingSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh", // Full viewport height
        backgroundImage: `url(${bg})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Shadow around the section
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))", // Gradient effect
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Above the overlay
          maxWidth: "600px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Text shadow for clarity
          }}
        >
          Welcome to Life Canvas
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontSize: "18px",
            lineHeight: 1.5,
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Empowering art and creativity to bring hope and support to the less
          fortunate. Join us in making a difference through art.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "25px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)", // Button shadow
            ":hover": {
              backgroundColor: "#1a73e8", // Slightly lighter blue on hover
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          Discover
        </Button>
      </Box>
    </Box>
  );
};

export default LandingSection;
