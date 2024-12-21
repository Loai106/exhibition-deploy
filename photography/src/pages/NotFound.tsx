import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        padding: "2rem",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "700", color: "#005288" }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "1rem", color: "#555" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: "#005288",
          color: "white",
          padding: "0.5rem 1.5rem",
          "&:hover": {
            backgroundColor: "#004076",
          },
        }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
