import {
  Box,
  Grid2 as Grid,
  Typography,
  Avatar,
  Paper,
  Divider,
  Chip,
  Skeleton,
} from "@mui/material";
import LandingSection from "../components/shared/Landing";
import useGetSinglePainting from "../hooks/useGetSinglePainting";
import { useLocation } from "react-router-dom";

const ExhibitionDetail = () => {
  const location = useLocation();
  const { data: paintingData, isLoading } = useGetSinglePainting(
    location.state.paintId
  );
  const artist = paintingData?.data?.artists[0];

  return (
    <>
      <LandingSection image={paintingData?.data?.painting_url} />

      <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", flexGrow: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Painting Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: 2,
                }}
              />
            ) : (
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
                  src={paintingData?.data?.painting_url}
                  alt={paintingData?.data?.paintingName}
                  style={{
                    width: "50%",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            )}
          </Grid>

          {/* Right Section: Description and Artist Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                sx={{
                  width: "100%",
                  height: "300px",
                  borderRadius: 2,
                }}
              />
            ) : (
              <>
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
                    {paintingData?.data?.paintingName}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {paintingData?.data?.description}
                  </Typography>
                  <Divider sx={{ marginY: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    <Chip
                      label={`Height: ${paintingData?.data?.height} cm`}
                      sx={{ mr: 1 }}
                    />
                    <Chip label={`Width: ${paintingData?.data?.width} cm`} />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 2 }}
                  >
                    Created on:{" "}
                    {new Date(paintingData?.data?.date ?? "--").toDateString()}
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
                        src={artist?.artistPic}
                        alt={`${artist?.firstName} ${artist?.lastName}`}
                        sx={{ width: 80, height: 80 }}
                      />
                    </Grid>
                    <Grid>
                      <Typography variant="h5">
                        {artist?.firstName} {artist?.lastName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        From: {artist?.pob}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Age: {artist?.age}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ marginY: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    {artist?.artistStory.substring(0, 300)}...
                  </Typography>
                </Paper>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ExhibitionDetail;
