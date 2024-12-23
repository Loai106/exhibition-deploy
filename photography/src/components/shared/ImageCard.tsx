import { Box, Typography, Skeleton, Grid2 as Grid } from "@mui/material";

const ImageCard = ({
  image,
  title,
  desc,
  loading,
  key,
  onClick,
}: ImageCardProps) => {
  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
        md: 4,
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        color: "inherit",
        transition: "color 0.3s ease",
        ":hover, :focus-within": {
          color: "#1a73e8",
        },
      }}
      onClick={onClick}
      tabIndex={0} // Make grid focusable for mobile hover effect
      key={key}
    >
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "300px",
            borderRadius: 2,
            mb: 2,
          }}
        />
      ) : (
        <Box
          onClick={onClick}
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: 3,
            height: {
              xs: "200px",
              md: "250px",
              lg: "300px",
            },
            backgroundColor: "#f9f9f9",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            overflow: "hidden", // Ensures the content stays within bounds
            cursor: "pointer", // Adds pointer cursor
            ":hover, :focus-within": {
              transform: "scale(1.03)", // Slight zoom effect
              boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
            },
            mb: 2,

            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              height: "100%",
              objectFit: "cover",
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
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0, // Initially hidden
              transition: "opacity 0.3s ease",
              ":hover": {
                opacity: 1, // Show overlay on hover
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                mb: 1,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              See More
            </Typography>
          </Box>
        </Box>
      )}

      {loading ? (
        <Box sx={{ width: "80%" }}>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="60%" />
        </Box>
      ) : (
        <>
          {/* Workshop Title */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          {/* Workshop Description */}
          <Typography
            variant="body2"
            sx={{
              color: "#666",
            }}
          >
            {desc}
          </Typography>
        </>
      )}
    </Grid>
  );
};

export default ImageCard;

interface ImageCardProps {
  image?: string;
  title?: string;
  desc?: string;
  loading?: boolean;
  key: number;
  onClick?: () => void;
}
