import { Box } from "@mui/material";
import Header from "../components/home/Header";
import About from "../components/home/About";
import Workshops from "../components/home/Workshops";
import partners from "/images/partners.png";
const Home = () => {
  return (
    <Box>
      <Header />
      <img
        src={partners}
        alt="partners"
        style={{ width: "100%", height: "auto" }}
      />
      <About />
      <Workshops />
    </Box>
  );
};

export default Home;
