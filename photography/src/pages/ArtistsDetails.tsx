import React, { useState } from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import useGetSingleArtist from "../hooks/useGetSingleArtist";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../components/shared/PageTitle";

const ArtistDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const artistId = useMemo(() => location.state?.artistId, [location.state]);
  const { data: artistData, isFetching } = useGetSingleArtist(artistId);

  const [showFullStory, setShowFullStory] = useState(false);

  const handleViewPainting = (paintingId: string | number) => {
    navigate(`/exhibitions/${paintingId}`, { state: { paintId: paintingId } });
  };

  const toggleShowMore = () => {
    setShowFullStory((prev) => !prev);
  };

  return (
    <Container sx={{ mb: 4 }}>
      <PageTitle title="Artist" alignment="center" />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
          mb: 6,
        }}
      >
        {/* Artist Details */}
        <Box sx={{ flex: 1 }}>
          {!isFetching ? (
            <>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                {artistData?.data?.firstName} {artistData?.data?.lastName}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                <strong>Place of Birth:</strong> {artistData?.data?.pob}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                <strong>Age:</strong> {artistData?.data?.age}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  mb: 2,
                  display: showFullStory ? "block" : "-webkit-box",
                  WebkitLineClamp: 8,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {artistData?.data?.artistStory}
              </Typography>
              {artistData?.data?.artistStory?.length &&
                artistData.data.artistStory.length > 700 && (
                  <Button
                    variant="outlined"
                    sx={{ mt: 2, color: "black", borderColor: "black" }}
                    onClick={toggleShowMore}
                  >
                    {showFullStory ? "Show Less" : "Read More"}
                  </Button>
                )}
            </>
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "400px",
                backgroundColor: "#f0f0f0",
              }}
            />
          )}
        </Box>

        {/* Artist Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() =>
            navigate(`/artist/${artistId}`, { state: { artistId } })
          }
        >
          {!isFetching ? (
            <img
              src={artistData?.data?.artistPic}
              alt={`${artistData?.data?.firstName} ${artistData?.data?.lastName}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "600px",
                objectFit: "cover",
                filter: "grayscale(100%)", // Black and white
              }}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "400px",
                backgroundColor: "#f0f0f0",
                filter: "grayscale(100%)",
              }}
            />
          )}
        </Box>
      </Box>

      {/* Exhibitions Section */}
      <Box>
        <PageTitle title="Exhibitions" />

        <Grid container spacing={4}>
          {isFetching
            ? Array.from(new Array(4)).map((_, index) => (
                <Grid key={index} item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "300px",
                      backgroundColor: "#f0f0f0",
                    }}
                  />
                </Grid>
              ))
            : artistData?.data?.paintings.map((painting) => (
                <Grid key={painting.painting_id} item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      cursor: "pointer",
                      "&:hover img": { transform: "scale(1.05)" },
                    }}
                    onClick={() => handleViewPainting(painting.painting_id)}
                  >
                    <img
                      src={painting.painting_url}
                      alt={painting.paintingName}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                      {painting.paintingName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                      {painting.description?.substring(0, 100)}...
                    </Typography>
                  </Box>
                </Grid>
              ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ArtistDetail;
