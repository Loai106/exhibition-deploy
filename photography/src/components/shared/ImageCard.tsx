import { Box, Typography, Skeleton, Grid2 as Grid } from "@mui/material";
import { useState } from "react";

const ImageCard = ({
  image,
  title,
  desc,
  loading,
  key,
  onClick,
}: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
          color: "#FFB400",
        },
      }}
      onClick={onClick}
      tabIndex={0}
      key={key}
    >
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "300px",
            mb: 2,
          }}
        />
      ) : (
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: "200px",
              md: "250px",
              lg: "300px",
            },
            backgroundColor: "#f9f9f9",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            overflow: "hidden",
            cursor: "pointer",
            ":hover, :focus-within": {
              transform: "scale(1.03)",
              boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
            },
            mb: 2,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Background Hover Effect */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: isHovered ? "rgba(0, 0, 0, 0.4)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          />

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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
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
          {/* Title & Description */}

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              position: "relative",
              transition: "background-color 0.3s ease",
              px: 1, // Add padding for better effect
              borderRadius: "5px",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#666",
              mb: 1,
              position: "relative",
              transition: "background-color 0.3s ease",
              px: 1,
              borderRadius: "5px",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {desc}
          </Typography>

          {/* Support Button */}
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
  onSupportClick?: () => void;
}
