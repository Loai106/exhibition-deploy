import {
  Box,
  Typography,
  Paper,
  Divider,
  Grid2 as Grid,
  Button,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  Container,
} from "@mui/material";
import useGetSingleArtist from "../hooks/useGetSingleArtist";
import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../components/shared/PageTitle";

const ArtistDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const artistId = useMemo(() => location.state?.artistId, [location.state]);
  const { data: artistData, isLoading } = useGetSingleArtist(artistId);

  const handleViewPainting = useCallback(
    (paintId: string) => {
      navigate(`/exhibitions/${paintId}`, { state: { paintId } });
    },
    [navigate]
  );

  return (
    <Container>
      <PageTitle title="Artist" alignment="center" />
      <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        {/* Artist Profile Section */}
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            height={400}
            sx={{ borderRadius: 3, marginBottom: 4 }}
          />
        ) : (
          <Paper
            sx={{
              padding: 4,
              borderRadius: 3,
              boxShadow: 4,
              backgroundColor: "#ffffff",
              textAlign: "center",
            }}
          >
            {/* Larger Artist Picture */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 3,
              }}
            >
              <img
                src={artistData?.data?.artistPic}
                alt={`${artistData?.data?.firstName} ${artistData?.data?.lastName}`}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #ddd",
                }}
              />
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {artistData?.data?.firstName} {artistData?.data?.lastName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginY: 1 }}
            >
              Place of Birth: {artistData?.data?.pob}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginY: 1 }}
            >
              Age: {artistData?.data?.age}
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {artistData?.data?.artistStory}
            </Typography>
          </Paper>
        )}

        {/* Paintings Section */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Paintings
          </Typography>
          <Grid container spacing={4}>
            {isLoading
              ? Array.from(new Array(4)).map((_, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Skeleton
                      variant="rectangular"
                      height={300}
                      sx={{ borderRadius: 3 }}
                    />
                  </Grid>
                ))
              : artistData?.data?.paintings.map((painting: any) => (
                  <Grid size={{ xs: 12, md: 6 }} key={painting.painting_id}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: 3,
                        boxShadow: 4,
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={painting.painting_url}
                        alt={painting.paintingName}
                        sx={{
                          height: 400,
                          borderRadius: "8px 8px 0 0",
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {painting.paintingName}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ marginTop: 1, marginBottom: 2 }}
                        >
                          {painting.description.substring(0, 100)}...
                        </Typography>
                        <Chip
                          label={`Height: ${painting.height} cm`}
                          sx={{ marginRight: 1 }}
                        />
                        <Chip label={`Width: ${painting.width} cm`} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ marginTop: 2 }}
                        >
                          Date: {new Date(painting.date).toDateString()}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{ marginTop: 2 }}
                          onClick={() =>
                            handleViewPainting(painting.painting_id)
                          }
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ArtistDetail;
