
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Root() {
  return (
    <>
      <Navbar />
      <Grid
        sx={{
          minWidth: "100vw",
          minHeight: "300px",
        }}
      >
        <Outlet />
      </Grid>
      <Footer/>
    </>
  );
}
