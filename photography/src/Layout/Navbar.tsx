import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
    { label: "Exhibition", path: "/exhibitions" },
    { label: "Artists", path: "/artists" },
    {
      id: 4,
      label: "Virtual Gallery",
      path: "https://publish.exhibbit.com/gallery/178300305673707836/marble-gallery-126570/?v=20241227032001",
      styles: {
        padding: "3px 6px ",
        borderRadius: "4px",
        mx: "30px",
        fontSize: "14px",
        border: "1px solid black",
        color: "rgb(178, 178, 178)",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "black",
        },
      },
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItemButton
          component={NavLink}
          to={item.path}
          key={item.label}
          onClick={handleDrawerToggle}
          target={item.id === 4 ? "_blank" : ""}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  );

  const linkStyles = {
    textDecoration: "none",
    fontSize: "14px",
    padding: "5px 10px",
    "&:hover": {
      color: "black",
    },
  };

  const appBarStyles = {
    backgroundColor: "#ffffff",
    transition: "background-color 0.3s ease",
    boxShadow: "none",
    borderBottom: "1px solid rgb(190, 188, 188)",
    height: "50px",
  };

  return (
    <>
      <AppBar position="static" sx={appBarStyles}>
        <Container>
          <Toolbar
            sx={{
              gap: 16,
              height: "50px", // Set height of the Toolbar
              minHeight: "50px !important", // Ensure minHeight for consistency
              justifyContent: {
                xs: "space-between",
                md: "flex-start",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
              onClick={() => navigate("/")}
            >
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "16px",
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
              gap={2}
            >
              {navItems.map((item) => (
                <Grid key={item.label}>
                  <NavLink
                    to={item.path}
                    target={item.id === 4 ? "_blank" : ""}
                    style={({ isActive }) => ({
                      ...(item.styles ? item.styles : linkStyles),
                      textDecoration: "none",
                      color: isActive ? "black" : "rgb(178, 178, 178)",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    {item.label}
                  </NavLink>
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
