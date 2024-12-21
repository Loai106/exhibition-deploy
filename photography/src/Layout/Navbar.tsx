import Grid from "@mui/material/Grid2";
import{ useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Exhibitions", path: "/exhibitions" },
    { label: "Artists", path: "/artists" },
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

  const appBarStyles = {
    backgroundColor: "#005288",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "18px",
    padding: "0 1rem",
  };

  return (
    <>
      <AppBar position="static" sx={appBarStyles}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation */}
          <Grid
            container
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item) => (
              <Grid  key={item.label}>
                <Link to={item.path} style={linkStyles}>
                  {item.label}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
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