import {
  Box,
  Typography,
  Button,
  Grid2 as Grid,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const aboutText = `
Amid the rubble of war and the echoes of explosions, the colors of hope emerged in the "Life Canvas: Insights from Gaza" exhibition. Here, suffering transformed into creativity, and pain turned into stories told through the strokes of a paintbrush.
The exhibition, implemented by Spark for Innovation and Creativity in Deir Al-Balah, Gaza, was organized in partnership with the Save Youth Future Society, with support from the United Nations Population Fund (UNFPA), and funded by Education Above All.

The exhibition features the works of 29 Palestinian artists, each of whom used their imagination and colors to depict the daily realities of life during war. Their works showcase scenes of destruction, long queues for bread and water, and images of the wounded and displaced. Yet, amid this pain, glimpses of hope shined through every corner of the exhibition.

Some of the paintings combined images of destruction with symbols of hope, such as green wheat stalks sprouting from rubble and trees emerging from beneath the ruins, reflecting the enduring spirit of life despite the devastation.

While dark`;

const About = () => {
  const navigate = useNavigate();

  const toggleReadMore = () => {
    navigate("/about");
  };

  return (
    <Container
      sx={{
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <Grid container spacing={4} alignItems="center" py={8}>
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
            Life Canvas
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              mt: 2,
              display: "-webkit-box",
              WebkitLineClamp: 8,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {aboutText}
          </Typography>
          <Button variant="text" color="primary" onClick={toggleReadMore}>
            Read More
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
  );
};

export default About;
