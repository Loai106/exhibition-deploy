import { Box, Grid2 as Grid } from "@mui/material";
import useGetAllPainting from "../hooks/useGetAllPainting";
import LandingSection from "../components/shared/Landing";
import PageTitle from "../components/shared/PageTitle";
import ImageCard from "../components/shared/ImageCard";
import Logo from "/images/logo.png";

const Exhibitions = () => {
  const { data: paintingsData, isLoading } = useGetAllPainting();
  console.log(paintingsData);
  return (
    <>
      <LandingSection />
      <PageTitle title="Exhibitions" alignment="center" />
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {paintingsData?.data?.map((painting) => (
          <ImageCard
            image={Logo} //TODO:Need to replace with actual image
            title={painting.paintingName}
            desc={painting.artists[0].artistName}
          />
        ))}
      </Grid>
    </>
  );
};

export default Exhibitions;
