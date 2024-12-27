import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid2 as Grid,
  Container,
} from "@mui/material";

const aboutText = `
Amid the rubble of war and the echoes of explosions, the colors of hope emerged in the "Life Canvas: Insights from Gaza" exhibition. Here, suffering transformed into creativity, and pain turned into stories told through the strokes of a paintbrush.
The exhibition, implemented by Spark for Innovation and Creativity in Deir Al-Balah, Gaza, was organized in partnership with the Save Youth Future Society, with support from the United Nations Population Fund (UNFPA), and funded by Education Above All.

The exhibition features the works of 29 Palestinian artists, each of whom used their imagination and colors to depict the daily realities of life during war. Their works showcase scenes of destruction, long queues for bread and water, and images of the wounded and displaced. Yet, amid this pain, glimpses of hope shined through every corner of the exhibition.

Some of the paintings combined images of destruction with symbols of hope, such as green wheat stalks sprouting from rubble and trees emerging from beneath the ruins, reflecting the enduring spirit of life despite the devastation.

While dark, somber colors dominated the majority of the works, they were not devoid of vibrant hues that symbolized persistence and determination. Paintings illustrated the harsh realities of daily life under siege, from families lining up for bread to those waiting for water, echoing the relentless struggle of Gaza's people.

"Life Canvas: Insights from Gaza" is more than an exhibition; it is a message from Gaza to the world. It is a declaration that creativity endures, even in the darkest of times. Each corner of the exhibition tells tales of hope and resilience, shared through the colors and brushstrokes of its artists.

Enjoy the beauty of their creations and support them so they can continue to nurture hope. Your support empowers these artists to keep drawing, creating, and sharing their stories. 
Supporting art is supporting life itself.
Heyam Al-Hayek
General Director, 
Spark for Innovation and Creativity
`;

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", color: "#333" }}>
      <Container>
        <Grid container spacing={4} alignItems="start" py={8}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              gutterBottom
              color="textSecondary"
              sx={{
                fontWeight: "bold",
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
              Life Canvas: Insights from Gaza – Where Art Reflects Life
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                mt: 2,
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "none" : 8, // Toggle full or truncated text
                WebkitBoxOrient: expanded ? "unset" : "vertical",
                overflow: expanded ? "visible" : "hidden",
                textOverflow: expanded ? "unset" : "ellipsis",
              }}
            >
              {aboutText}
            </Typography>
            <Button
              variant="text"
              sx={{ color: "gray" }}
              onClick={toggleReadMore}
            >
              {expanded ? "Read Less" : "Read More"}
            </Button>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/SqMg3_OmXSA?autoplay=1&mute=1"
              title="Spark Exhibition Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                width: "100%",
                height: "315px",
                borderRadius: "8px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
