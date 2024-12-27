import { useState } from "react";
import { Box, Container, Typography, Skeleton } from "@mui/material";
import PageTitle from "../components/shared/PageTitle";
import useGetAllArtists from "../hooks/useGetAllArtists";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Artist } from "../types";

const Artists = () => {
  const { data: artistsData, isLoading } = useGetAllArtists();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleSlideChange = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Define grid styles for each of the 8 images
  const gridStyles = (index: number, isSmallScreen: boolean) => {
    if (isSmallScreen) {
      // Equal size for all items on small screens
      return { gridColumn: "span 1", gridRow: "span 1" };
    }

    // Large screen styles
    const styles = [
      { gridColumn: "span 2", gridRow: "span 2" }, // First two images
      { gridColumn: "span 2", gridRow: "span 2" },
      { gridColumn: "span 3", gridRow: "span 3" }, // Third image
      { gridColumn: "span 2", gridRow: "span 2" }, // Fourth and fifth images
      { gridColumn: "span 2", gridRow: "span 2" },
      { gridColumn: "span 4", gridRow: "span 4" }, // Sixth image
      { gridColumn: "span 4", gridRow: "span 4" }, // Seventh image
      { gridColumn: "span 3", gridRow: "span 3" }, // Eighth image
    ];
    return styles[index];
  };

  const chunkArray = (array: Artist[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const renderGridItems = (items?: Artist[]) => {
    if (isLoading) {
      // Show skeletons when loading
      return Array.from(new Array(8)).map((_, index) => (
        <Box
          key={`skeleton-${index}`}
          sx={{
            gridColumn: {
              xs: gridStyles(index, true).gridColumn,
              md: gridStyles(index, false).gridColumn,
            },
            gridRow: {
              xs: gridStyles(index, true).gridRow,
              md: gridStyles(index, false).gridRow,
            },
            backgroundColor: "#f0f0f0",
            maxHeight: "100%",
          }}
        >
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      ));
    }
    if (!items) return null;

    return items.map((artist, index) => (
      <Box
        key={artist.artist_id}
        sx={{
          gridColumn: {
            xs: gridStyles(index, true).gridColumn,
            md: gridStyles(index, false).gridColumn,
          },
          gridRow: {
            xs: gridStyles(index, true).gridRow,
            md: gridStyles(index, false).gridRow,
          },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={() =>
          navigate(`/artist/${artist.artist_id}`, {
            state: { artistId: artist.artist_id },
          })
        }
      >
        {/* Artist Image */}
        <Box
          component="img"
          loading="lazy"
          src={artist.artistPic}
          alt={`${artist.firstName} ${artist.lastName}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(100%)", // Black-and-white effect
            transition: "filter 0.3s ease, transform 0.3s ease", // Smooth transitions
            ":hover": {
              filter: "grayscale(0%)", // Revert to color on hover
              transform: "scale(1.05)", // Slight zoom effect
            },
          }}
        />
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
            opacity: 0, // Hidden by default
            transition: "opacity 0.3s ease",
            ":hover": {
              opacity: 1, // Show overlay on hover
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            {artist.firstName} {artist.lastName}
          </Typography>
        </Box>
      </Box>
    ));
  };

  return (
    <Container maxWidth="xl">
      {/* Title */}
      <PageTitle title="Artists" alignment="center" />

      {isLoading && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)", // 2 columns on small screens
              sm: "repeat(3, 1fr)", // 3 columns on medium screens
              md: "repeat(11, 1fr)", // 11 columns on larger screens
            },
            gridAutoRows: "minmax(150px, auto)", // Dynamic rows
            gap: 2,
            height: "100vh",
          }}
        >
          {renderGridItems()}
        </Box>
      )}

      <Carousel
        showArrows={true}
        showIndicators={true}
        autoPlay
        selectedItem={selectedImageIndex}
        onChange={handleSlideChange}
        interval={5000}
        showStatus={false}
        dynamicHeight={false}
      >
        {artistsData?.data &&
          chunkArray(artistsData.data, 8).map((chunk, index) => (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)", // 2 columns on small screens
                  sm: "repeat(3, 1fr)", // 3 columns on medium screens
                  md: "repeat(11, 1fr)", // 11 columns on larger screens
                },
                gridTemplateRows: "repeat(6, 1fr)", // Dynamic rows
                gap: 2,
                height: "100vh",
              }}
              key={index}
            >
              {renderGridItems(chunk)}
            </Box>
          ))}
      </Carousel>
    </Container>
  );
};

export default Artists;
