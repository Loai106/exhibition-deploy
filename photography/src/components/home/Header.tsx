import React from "react";
import { Box, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "/images/carousel1.jpeg";
import img2 from "/images/carousel2.jpeg";
import img3 from "/images/carousel3.jpeg";
import img4 from "/images/carousel4.jpeg";

const Header: React.FC = () => {
  const images = [
    {
      url: img4,
      text: "Explore Stunning Photography",
      description: "Discover captivating moments captured through our lens.",
    },
    {
      url: img3,
      text: "Unveil Unique Perspectives",
      description: "Experience the art of storytelling through photography.",
    },
    {
      url: img2,
      text: "Embrace Vibrant Colors",
      description: "Dive into the beauty and creativity of vivid imagery.",
    },
    {
      url: img1,
      text: "Embrace Vibrant Colors",
      description: "Dive into the beauty and creativity of vivid imagery.",
    },
  ];
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={5000}
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
            height: "calc(100vh - 50px)",
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
              backgroundColor: "rgba(0, 0, 0, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "8px",
                position: "absolute", // Absolute positioning
                bottom: "10%", // Adjust position closer to the bottom
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "black",
                },
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              }}
              onClick={() =>
                window.open(
                  "https://publish.exhibbit.com/gallery/178300305673707836/marble-gallery-126570/?v=20241227032001",
                  "_blank"
                )
              }
            >
              Visit Virtual Gallery
            </Button>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default Header;
