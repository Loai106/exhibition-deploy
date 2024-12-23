import { Grid2 as Grid, Box, Typography, Container } from "@mui/material";
import useGetAllPainting from "../hooks/useGetAllPainting";
import LandingSection from "../components/shared/Landing";
import ImageCard from "../components/shared/ImageCard";

const Exhibitions = () => {
  const { data: paintingsData, isLoading } = useGetAllPainting();

  return (
    <>
      <LandingSection title="Exhibitions" />
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 4, mt: 6, p: 0, width: "100%" }}>
          {isLoading ? (
            Array.from(new Array(6)).map((_, index) => (
              <ImageCard key={index} loading={true} />
            ))
          ) : paintingsData?.data && paintingsData.data.length > 0 ? (
            paintingsData.data.map((painting) => (
              <ImageCard
                key={painting.painting_id}
                image={painting.painting_url}
                title={painting.paintingName}
                desc={
                  painting.artists[0]?.firstName +
                    " " +
                    painting.artists[0]?.lastName || "--"
                }
                loading={false}
              />
            ))
          ) : (
            <Box
              sx={{
                textAlign: "center",
                py: 4,
                color: "text.secondary",
                width: "100%",
              }}
            >
              <Typography variant="h6" gutterBottom>
                No Exhibitions Available
              </Typography>
              <Typography variant="body2">
                Please check back later for new updates.
              </Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Exhibitions;
