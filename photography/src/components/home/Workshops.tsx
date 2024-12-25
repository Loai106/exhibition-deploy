import React, { useState } from "react";
import { Box, Container, Grid2 as Grid, Skeleton } from "@mui/material";
import PageTitle from "../shared/PageTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.jpg";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.jpg";
import img7 from "/images/img7.jpg";
import img8 from "/images/img8.jpg";
import img9 from "/images/img9.jpg";
import img10 from "/images/img10.jpg";

const workshops = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
];

const Workshops = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Default to first image
  const [loading, setLoading] = useState(true); // Simulate loading

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleSlideChange = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Simulate loading delay
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulated delay
    return () => clearTimeout(timer);
  }, []);

  const getOptimizedImage = (url: string, width: number, height: number) =>
    `${url}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2`;

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, md: 8 },
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <Container>
        {/* Title Section */}
        <PageTitle title="Workshops" alignment="center" />

        {/* Main Image Carousel Section */}
        <Carousel
          selectedItem={selectedImageIndex}
          onChange={handleSlideChange}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
          showStatus
          dynamicHeight={false}
          showIndicators={false}
        >
          {workshops.map((image) => (
            <Box
              key={image.id}
              sx={{
                position: "relative",
                overflow: "hidden",
                background: "#000",
                width: "100%",
              }}
            >
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: "70% !important",
                    height: {
                      xs: "40vh",
                      sm: "60vh",
                    },
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <img
                  src={getOptimizedImage(image.src, 300, 200)}
                  alt={`Thumbnail ${image.id}`}
                  loading="lazy"
                  style={{
                    width: "80%",
                    height: "60vh",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              )}
            </Box>
          ))}
        </Carousel>

        {/* Thumbnails Section */}
        <Grid container spacing={2} sx={{ mt: 3 }} justifyContent="center">
          {loading
            ? Array.from(new Array(10)).map((_, index) => (
                <Grid
                  size={{ xs: 3, sm: 2, md: 1 }}
                  key={`skeleton-${index}`}
                  sx={{
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: "100%",
                      height: "60px",
                      borderRadius: "4px",
                    }}
                  />
                </Grid>
              ))
            : workshops.map((image, index) => (
                <Grid
                  size={{ xs: 3, sm: 2, md: 1 }}
                  key={image.id}
                  sx={{
                    cursor: "pointer",
                    border:
                      selectedImageIndex === index
                        ? "2px solid #1a73e8"
                        : "none",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                  onClick={() => handleThumbnailClick(index)}
                >
                  {/* <Box
                    component="img"
                    src={image.src}
                    alt={`Thumbnail ${image.id}`}
                    sx={{
                      width: "100%",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      transition: "transform 0.3s ease",
                      ":hover": {
                        transform: "scale(1.05)", // Slight zoom on hover
                      },
                    }}
                  /> */}
                  <img
                    src={getOptimizedImage(image.src, 300, 200)}
                    alt={`Thumbnail ${image.id}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Workshops;
