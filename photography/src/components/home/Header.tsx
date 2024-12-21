import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from "@mui/material/Grid2";

const Header: React.FC = () => {
  const images = [
    {
      url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      text: "Welcome to Our Photography Site",
      description:
        "Explore the world through our lens. Capturing moments that matter the most.",
    },
    {
      url: "https://img.freepik.com/free-photo/view-chameleon-with-bright-neon-colors_23-2151682707.jpg",
      text: "Dive into Vibrant Colors",
      description:
        "Experience the beauty of nature and creativity through vivid photography.",
    },
    {
      url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      text: "Welcome to Our Photography Site",
      description:
        "Explore the world through our lens. Capturing moments that matter the most.",
    },
  ];

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={3000}
      showStatus={false}
      showIndicators={true}
      showArrows={false}
      emulateTouch
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            height: "80vh",
            color: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${image.url})`,
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={4}
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              px: 4,
              textAlign: "center",
            }}
          >
            <Grid size={6}>
              <Typography variant="h2" gutterBottom>
                {image.text}
              </Typography>
              <Typography variant="body1">{image.description}</Typography>
            </Grid>

            {/* Static Image with Hover Animation */}
            <Grid
              size={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.15)",
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)",
                  },
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Box
                  component="img"
                  src={image.url}
                  alt="Decorative"
                  sx={{
                    borderRadius: "24px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Carousel>
  );
};

export default Header;
