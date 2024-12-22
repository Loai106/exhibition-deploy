import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Stack } from "@mui/material";
export default function AppRoot() {
  return (
    <Stack justifyContent="space-between" sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Stack
        sx={{
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}
