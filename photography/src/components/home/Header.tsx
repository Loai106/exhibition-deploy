import React from "react";
import { Box } from "@mui/material";
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
            height: "calc(100vh - 60px)",
            color: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${image.url})`,
          }}
        ></Box>
      ))}
    </Carousel>
  );
};

export default Header;
