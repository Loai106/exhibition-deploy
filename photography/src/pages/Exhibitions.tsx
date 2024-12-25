import { Grid2 as Grid, Box, Typography, Container } from "@mui/material";
import useGetAllPainting from "../hooks/useGetAllPainting";
import ImageCard from "../components/shared/ImageCard";
import { useNavigate } from "react-router-dom";

const Exhibitions = () => {
  const { data: paintingsData, isLoading } = useGetAllPainting();
  const navigate = useNavigate();
   const handleCardClick = (paintId: any) => {
    navigate(`/exhibitions/${paintId}`, { state: { paintId } });
  };
  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          mt: 3,
          fontWeight: "bold",
          color: "black",
          borderBottom: "1px solid #d8d8d9",
        }}
      >
        Exhibitions
      </Typography>

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
  );
};

export default Exhibitions;
