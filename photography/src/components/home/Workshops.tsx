import React from "react";
import { Box, Typography, Grid2 as Grid } from "@mui/material";

const workshops = [
  {
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Replace with actual image URL
    title: "Creative Painting Workshop",
    description:
      "Explore the basics of painting techniques and express your creativity on canvas.",
  },
  {
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Replace with actual image URL
    title: "Photography Essentials",
    description:
      "Learn the art of capturing stunning photographs and mastering camera settings.",
  },
  {
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Replace with actual image URL
    title: "Sculpture Design",
    description:
      "Dive into the world of sculpture making and unleash your 3D design skills.",
  },
  {
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    title: "Digital Art Workshop",
    description:
      "Discover how to create digital masterpieces using the latest tools and techniques.",
  },
];

const Workshops: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, md: 8 },
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "#1a73e8", // Adjust color to match theme
        }}
      >
        Workshops
      </Typography>
      <Grid container spacing={4}>
        {workshops.map((workshop, index) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Workshop Image */}
            <Box
              component="img"
              src={workshop.image}
              alt={workshop.title}
              sx={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                mb: 2,
              }}
            />
            {/* Workshop Title */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
              }}
            >
              {workshop.title}
            </Typography>
            {/* Workshop Description */}
            <Typography variant="body2" sx={{ color: "#666" }}>
              {workshop.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Workshops;
