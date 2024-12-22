import { Box, Grid2 as Grid, Typography } from "@mui/material";

const ImageCard = ({ image, title, desc }: ImageCardProps) => {
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
      tabIndex={0} // Make grid focusable for mobile hover effect
    >
      {/* Workshop Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          maxWidth: "300px",
          height: "auto",
          borderRadius: 2,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          mb: 2,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          ":hover, :focus-within": {
            transform: "scale(1.05)", // Slight zoom effect
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
          },
        }}
      />
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
    </Grid>
  );
};

export default ImageCard;

interface ImageCardProps {
  image: string;
  title: string;
  desc: string;
}
