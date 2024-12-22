import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bg from "../../../public/images/landing.webp";

const LandingSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", sm: "60vh", md: "80vh" }, // Responsive height
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
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
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: { xs: "90%", sm: "600px" }, // Responsive maxWidth
          padding: "20px",
        }}
      >
        <Typography
          variant="h3" // Adjusted for smaller screens
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "28px", sm: "36px", md: "48px" }, // Responsive font size
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          }}
        >
          Welcome to Life Canvas
        </Typography>
        <Typography
          variant="body1" // Adjusted for smaller screens
          sx={{
            mb: 4,
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
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
            px: { xs: 3, sm: 4 }, // Responsive padding
            py: 1.5,
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            fontWeight: "bold",
            borderRadius: "25px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            ":hover": {
              backgroundColor: "#1a73e8",
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
