import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Stack } from "@mui/material";
import { useEffect } from "react";
export default function AppRoot() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
