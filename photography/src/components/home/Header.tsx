import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from "@mui/material/Grid2";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";

const Header: React.FC = () => {
  const images = [
    {
      url: img1,
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
          <Container
            sx={{
              height: "100%",
            }}
          >
            {/* Content */}
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent={{ xs: "center", md: "space-between" }}
              spacing={4}
              sx={{
                position: "relative",
                zIndex: 2,
                height: "100%",
              }}
            >
              <Grid
                size={{
                  xs: 12,
                  md: 6,
                }}
              >
                <Typography variant="h4" gutterBottom>
                  {image.text}
                </Typography>
                <Typography variant="body1">{image.description}</Typography>
              </Grid>

              {/* Static Image with Hover Animation */}
              <Grid
                size={{
                  xs: 12,
                  md: 6,
                }}
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
          </Container>
        </Box>
      ))}
    </Carousel>
  );
};

export default Header;
