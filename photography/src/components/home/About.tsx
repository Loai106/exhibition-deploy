import React, { useState } from "react";
import { Box, Typography, Button, Grid2 as Grid } from "@mui/material";

// Text content saved in a variable
const aboutText = `  Amid the rubble of war and the echoes of explosions, the colors of
            hope emerged in the "Life Canvas: Insights from Gaza" exhibition.
            Here, suffering transformed into creativity, and pain turned into
            stories told through the strokes of a paintbrush.
            <br />
            The exhibition, implemented by Spark for Innovation and Creativity
            in Deir Al-Balah, Gaza, was organized in partnership with the Save
            Youth Future Society, with support from the United Nations
            Population Fund (UNFPA), and funded by Education Above All.
            <br />
            The exhibition features the works of 29 Palestinian artists, each
            of whom used their imagination and colors to depict the daily
            realities of life during war. Their works showcase scenes of
            destruction, long queues for bread and water, and images of the
            wounded and displaced. Yet, amid this pain, glimpses of hope shined
            through every corner of the exhibition.
            <br />
            Some of the paintings combined images of destruction with symbols
            of hope, such as green wheat stalks sprouting from rubble and trees
            emerging from beneath the ruins, reflecting the enduring spirit of
            life despite the devastation.`;

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, md: 8 },
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Column: Text Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#1a73e8", // Adjust the color to match the screenshot
              display: "inline",
            }}
          >
            About{" "}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", display: "inline" }}
          >
            Life Canvas
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              mt: 2,
              display: expanded ? "block" : "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {aboutText}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleReadMore}
            sx={{
              mt: 2,
              backgroundColor: "#1a73e8",
              "&:hover": {
                backgroundColor: "#1558b0",
              },
            }}
          >
            {expanded ? "Read Less" : "Read More"}
          </Button>
        </Grid>

        {/* Right Column: Image Section */}
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Box
            component="img"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" // Replace with your image URL
            alt="Spark Exhibition"
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
