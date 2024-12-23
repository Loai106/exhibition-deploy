import { Grid2 as Grid } from "@mui/material";
import useGetAllPainting from "../hooks/useGetAllPainting";
import LandingSection from "../components/shared/Landing";
import PageTitle from "../components/shared/PageTitle";
import ImageCard from "../components/shared/ImageCard";
import LoaderDialog from "../shared/Loader";

const Exhibitions = () => {
  const { data: paintingsData, isLoading } = useGetAllPainting();
  console.log(paintingsData);
  return (
    <>
      <LandingSection />
      <PageTitle title="Exhibitions" alignment="center" />

      <LoaderDialog loading={isLoading} />

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {paintingsData?.data?.map((painting) => (
          <ImageCard
            image={painting.painting_url} //TODO:Need to replace with actual image
            title={painting.paintingName}
            desc={painting.artists[0]?.firstName || "--"}
          />
        ))}
      </Grid>
    </>
  );
};

export default Exhibitions;
