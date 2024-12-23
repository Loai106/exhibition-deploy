import React from "react";
import { Box } from "@mui/material";
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

const workshops = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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

      {/* Carousel Section */}
      <Carousel
        showThumbs={true}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={true}
        dynamicHeight={false}
        thumbWidth={100} // Controls the width of thumbnails
        renderThumbs={() =>
          workshops.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{
                height: "60px", // Adjust thumbnail height
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ))
        }
      >
        {workshops.map((image, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: "black",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                margin: "auto",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Workshop Image ${index + 1}`}
                sx={{
                  height: {
                    xs: "40vh",
                    sm: "60vh",
                  },
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Workshops;
