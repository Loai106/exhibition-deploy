import {
  Box,
  Grid2 as Grid,
  Typography,
  Avatar,
  Paper,
  Divider,
  Chip,
} from "@mui/material";
import LandingSection from "../components/shared/Landing";
import useGetSinglePainting from "../hooks/useGetSinglePainting";

const ExhibitionDetail = () => {
//   const { data: paintingData } = useGetSinglePainting("5");
  const paintingData = {
    painting_id: 5,
    paintingName: "Faces Questioning the Sky",
    description:
      "My painting Faces Questioning the Sky captures the indescribable cries and tears of war—the exhaustion etched into our faces since its onset. It reflects the sorrow of a mother who cannot find food for her child, returning empty-handed with nothing but anguish. It tells of children crying because they lack clean drinking water. Through this painting, I depict countless aspects of our reality—our dreams that have vanished, leaving us clinging to the last glimmer of hope in the sky. Our cries and tears don’t need voices; they only need eyes to witness them.",
    date: "2024-06-25T00:00:00.000Z",
    height: 70,
    width: 50,
    painting_url: "https://i.imgur.com/QTzJJGo.jpg",
    artists: [
      {
        artist_id: 3,
        firstName: "Balsam",
        lastName: "Helles",
        artistStory:
          "I am Balsam, a girl who sketched her dreams with charcoal pencils. Art was my sole escape from the hardships I endured, allowing me to express my innermost thoughts on paper...",
        pob: "Gaza",
        age: "21",
        artistPic: "https://i.imgur.com/pUB8m7f.jpg",
      },
    ],
  };

  const artist = paintingData.artists[0];

  return (
    <>
      <LandingSection image={paintingData.painting_url} />
      <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", flexGrow: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Painting Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 4,
              }}
            >
              <img
                src={paintingData.painting_url}
                alt={paintingData.paintingName}
                style={{
                  width: "50%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>

          {/* Right Section: Description and Artist Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Painting Description */}
            <Paper
              sx={{
                padding: 3,
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: "#ffffff",
                marginBottom: 3,
              }}
            >
              <Typography variant="h4" gutterBottom>
                {paintingData.paintingName}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {paintingData.description}
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body2" color="text.secondary">
                <Chip
                  label={`Height: ${paintingData.height} cm`}
                  sx={{ mr: 1 }}
                />
                <Chip label={`Width: ${paintingData.width} cm`} />
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 2 }}
              >
                Created on: {new Date(paintingData.date).toDateString()}
              </Typography>
            </Paper>

            {/* Artist Details */}
            <Paper
              sx={{
                padding: 3,
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: "#ffffff",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid>
                  <Avatar
                    src={artist.artistPic}
                    alt={`${artist.firstName} ${artist.lastName}`}
                    sx={{ width: 80, height: 80 }}
                  />
                </Grid>
                <Grid>
                  <Typography variant="h5">
                    {artist.firstName} {artist.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From: {artist.pob}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {artist.age}
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body1" color="text.secondary">
                {artist.artistStory.substring(0, 300)}...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ExhibitionDetail;
