import { Grid2 as Grid, Box, Typography, Container } from "@mui/material";
import ImageCard from "../components/shared/ImageCard";
import useGetAllArtists from "../hooks/useGetAllArtists";

const Artists = () => {
  const { data: artistsData, isLoading } = useGetAllArtists();

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          mt: 3,
          fontWeight: "bold",
          color: "black",
          borderBottom: "1px solid #d8d8d9",
        }}
      >
        Artists
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4, mt: 6, p: 0, width: "100%" }}>
        {isLoading ? (
          Array.from(new Array(6)).map((_, index) => (
            <ImageCard key={index} loading={true} />
          ))
        ) : artistsData?.data && artistsData.data.length > 0 ? (
          artistsData.data.map((artist) => (
            <ImageCard
              key={artist.artist_id}
              image={artist.artistPic}
              title={artist.firstName + " " + artist.lastName}
              loading={false}
            />
          ))
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 4,
              color: "text.secondary",
              width: "100%",
            }}
          >
            <Typography variant="h6" gutterBottom>
              No Exhibitions Available
            </Typography>
            <Typography variant="body2">
              Please check back later for new updates.
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Artists;
