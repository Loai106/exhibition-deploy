import { Box } from "@mui/material";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Workshops from "../components/home/Workshops";

const Home = () => {
  return (
    <Box>
      <Header />
      <About />
      <Workshops />
    </Box>
  );
};

export default Home;
