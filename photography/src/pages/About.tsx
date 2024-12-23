import { Box, Typography, Container, Stack } from "@mui/material";
import LandingSection from "../components/shared/Landing";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9" }}>
      <LandingSection
        title="About Us"
        description="Welcome to our photography world! Here, we believe that every picture
          tells a story. Our mission is to capture the beauty of life and the
          essence of emotions through our lens. From breathtaking landscapes to
          intimate moments, we’re passionate about creating memories that last a
          lifetime."
        showVideo
      />
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          sx={{
            mt: 6,
            mb: 6,
          }}
        >
          {/* Vision Section */}
          <Box
            sx={{
              minHeight: "180px",
              backgroundColor: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
              borderRadius: 2,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#1a73e8" }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  mr: 1,
                }}
              >
                🌟
              </Box>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ color: "#555" }}>
              To inspire creativity and connect people through the art of
              photography. We aim to bring the world closer by sharing stories,
              moments, and experiences that evoke emotions and foster
              understanding.
            </Typography>
          </Box>

          {/* Mission Section */}
          <Box
            sx={{
              minHeight: "180px",
              backgroundColor: "linear-gradient(135deg, #fff, #e3f2fd)",
              borderRadius: 2,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#1a73e8" }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  mr: 1,
                }}
              >
                🎯
              </Box>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: "#555" }}>
              To capture life’s most precious moments and transform them into
              timeless works of art. Through our lens, we aim to celebrate the
              beauty and diversity of our world, one photograph at a time.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
