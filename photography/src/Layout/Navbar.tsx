import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton, Box, Typography, Container } from "@mui/material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Exhibitions", path: "/exhibitions" },
    { label: "Artists", path: "/artists" },
    // { label: "About", path: "/about" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItemButton
          component={Link}
          to={item.path}
          key={item.label}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  );

  const linkStyles = {
    textDecoration: "none",
    color: "rgb(178, 178, 178)",
    fontSize: "16px",
    padding: "5px 10px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "black",
    },
  };

  const appBarStyles = {
    backgroundColor: "#ffffff", // Dynamic background
    transition: "background-color 0.3s ease", // Smooth transition
    boxShadow: "none",
    borderBottom: "1px solid rgb(190, 188, 188)",
  };

  return (
    <>
      <AppBar position="static" sx={appBarStyles}>
        <Container>
          <Toolbar
            sx={{
              gap: 16,
              px: "0px !important",
              justifyContent: {
                xs: "space-between",
                md: "flex-start",
              },
            }}
          >
            {/* Logo with Text */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                ml: "-12px",
              }}
              onClick={() => navigate("/")}
            >
              {/* <Box
                component="img"
                src={Logo}
                alt="Life Canvas Logo"
                sx={{
                  width: 70,
                  height: "auto",
                }}
              /> */}
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Life Canvas
              </Typography>
            </Box>

            {/* Hamburger Menu for Mobile */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, color: "black" }}
            >
              <MenuIcon />
            </IconButton>

            {/* Desktop Navigation */}
            <Grid
              container
              sx={{
                display: { xs: "none", md: "flex", color: "black" },
                justifyContent: "space-between",
              }}
            >
              {navItems.map((item) => (
                <Grid key={item.label}>
                  <Link to={item.path} style={{ textDecoration: "none" }}>
                    <Box sx={linkStyles}>{item.label}</Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": { width: "240px" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
