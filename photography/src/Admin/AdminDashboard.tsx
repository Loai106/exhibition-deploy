import { useGetIdentity, useLogout } from "@refinedev/core";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import ExhibitionList from "./ExhibitionList";
import LoginPage from "./LoginPage";

const drawerWidth = 240;

const AdminDashboard = () => {
  const { data: user } = useGetIdentity();
  const { mutate: logout, isLoading } = useLogout();
  const [selectedPage, setSelectedPage] = useState("exhibitions");

  if (!user) return <LoginPage />;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
        <List>
          <ListItem button onClick={() => setSelectedPage("exhibitions")}>
            <ListItemText primary="Exhibitions" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPage("dashboard")}>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {/* Top Navigation Bar */}
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Welcome, {user?.name}!</Typography>
            <Button
              color="inherit"
              onClick={() => logout()}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={20} /> : "Logout"}
            </Button>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Container>
          {selectedPage === "exhibitions" && <ExhibitionList />}
          {selectedPage === "dashboard" && (
            <Paper sx={{ padding: 4, textAlign: "center", marginTop: 4 }}>
              <Typography variant="h5">Dashboard Overview</Typography>
              <Typography variant="body1">
                Welcome to the admin dashboard.
              </Typography>
            </Paper>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
