import React from "react";
import { Box, Typography, Grid2 as Grid } from "@mui/material";
import ImageCard from "../shared/ImageCard";
import PageTitle from "../shared/PageTitle";

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
      <PageTitle title="Workshops" alignment="center" />
      <Grid container spacing={4}>
        {workshops.map((workshop, index) => (
          <ImageCard
            image={workshop.image}
            title={workshop.title}
            desc={workshop.description}
            key={index}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Workshops;
