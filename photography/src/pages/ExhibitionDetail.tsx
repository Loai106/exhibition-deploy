import {
  Box,
  Grid2 as Grid,
  Typography,
  Avatar,
  Divider,
  Button,
  Container,
  Skeleton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useGetSinglePainting from "../hooks/useGetSinglePainting";
import PageTitle from "../components/shared/PageTitle";
import { useCallback, useMemo, useState } from "react";
import PayPalDonate from "../components/shared/PayPalDonate";

const ExhibitionDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openPayPal, setOpenPayPal] = useState<string | undefined>();

  const paintId = useMemo(() => location.state?.paintId, [location.state]);
  const { data: paintingData, isFetching } = useGetSinglePainting(paintId);

  const artist = useMemo(() => paintingData?.data?.artists[0], [paintingData]);

  const handleReadMoreClick = useCallback(() => {
    if (artist?.artist_id) {
      navigate(`/artist/${artist.artist_id}`, {
        state: { artistId: artist.artist_id },
      });
    }
  }, [artist, navigate]);

  const handleSupportClick = () => {
    setOpenPayPal(paintId.toString());
  };

  return (
    <Container sx={{ mb: 4 }}>
      <PageTitle title="Art" alignment="center" />
      <Grid container spacing={4} alignItems="flex-start" sx={{ mt: 4 }}>
        {/* Painting Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          {isFetching ? (
            <Skeleton
              variant="rectangular"
              sx={{
                width: "100%",
                height: "400px",
              }}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={paintingData?.data?.painting_url}
                alt={paintingData?.data?.paintingName}
                sx={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent click event
                  handleSupportClick?.();
                }}
                sx={{
                  mt: 1,
                  px: 4,
                  py: 3,
                  borderRadius: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "#000",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#f5f5f5", // Dark gray on hover
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Glow effect
                    color: "#555", // Dark gray text color
                  },
                  boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.2)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                Support the Artist 🎨💙
              </Button>
            </Box>
          )}
        </Grid>

        {/* Details Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          {isFetching ? (
            <Skeleton
              variant="rectangular"
              sx={{
                width: "100%",
                height: "200px",
              }}
            />
          ) : (
            <Box sx={{ width: "100%" }}>
              <Typography variant="h4" gutterBottom>
                {paintingData?.data?.paintingName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {paintingData?.data?.description}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", mt: 2, mb: 1 }}>
                Dimensions: {paintingData?.data?.height} cm x{" "}
                {paintingData?.data?.width} cm
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                Created on:{" "}
                {new Date(paintingData?.data?.date ?? "").toDateString()}
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Typography variant="h5" gutterBottom>
                Artist
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src={artist?.artistPic}
                  alt={`${artist?.firstName} ${artist?.lastName}`}
                  sx={{ width: 64, height: 64 }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    {artist?.firstName} {artist?.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From: {artist?.pob}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {artist?.age}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: "gray", mt: 3 }}>
                {artist?.artistStory.substring(0, 150)}...
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "black", // Text color
                  borderColor: "gray", // Border color
                  "&:hover": {
                    backgroundColor: "lightgray", // Hover background color
                    borderColor: "black", // Hover border color
                  },
                }}
                onClick={handleReadMoreClick}
              >
                Read More About Artist
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
      <PayPalDonate
        open={!!openPayPal}
        handleClose={() => setOpenPayPal(undefined)}
        paintingId={openPayPal || ""}
      />
    </Container>
  );
};

export default ExhibitionDetail;
