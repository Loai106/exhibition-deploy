import About from "./components/home/About";
import Header from "./components/home/header";
import Wotkshops from "./components/home/Workshops";
import logo from "/images/logo.png";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1, // Spacing between logo and text
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: 60,
            height: "auto", // Maintain aspect ratio
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#333", // Adjust to match your theme
          }}
        >
          Life Canvas
        </Typography>
      </Box>
      <Header />
      <About />
      <Wotkshops />
    </>
  );
}

export default App;
