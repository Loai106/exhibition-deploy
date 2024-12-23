import { Box, Typography, Button } from "@mui/material";
import bg from "/images/landing.webp";
// import aboutVideo from "/images/about.mp4";

interface LandingSectionProps {
  title?: string;
  description?: string;
  showVideo?: boolean;
}

const LandingSection = ({
  title,
  description,
  showVideo = false,
}: LandingSectionProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", sm: "60vh", md: "80vh" }, // Responsive height
        backgroundImage: showVideo ? "" : `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      {showVideo && (
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/SqMg3_OmXSA?autoplay=1"
          allow="autoplay; encrypted-media"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: { xs: "90%", sm: "600px" }, // Responsive maxWidth
          padding: "20px",
        }}
      >
        <Typography
          variant="h3" // Adjusted for smaller screens
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "28px", sm: "36px", md: "48px" }, // Responsive font size
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          }}
        >
          {title ?? "Welcome to Life Canvas"}
        </Typography>
        <Typography
          variant="body1" // Adjusted for smaller screens
          sx={{
            mb: 4,
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
            lineHeight: 1.5,
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          {description ??
            "Empowering art and creativity to bring hope and support to the less fortunate. Join us in making a difference through art."}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: { xs: 3, sm: 4 }, // Responsive padding
            py: 1.5,
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            fontWeight: "bold",
            borderRadius: "25px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            ":hover": {
              backgroundColor: "#1a73e8",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          Discover
        </Button>
      </Box>
    </Box>
  );
};

export default LandingSection;
