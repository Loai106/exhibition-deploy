import { Refine } from "@refinedev/core";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import authProvider from "../Admin/authProvider";
import AdminDashboard from "../Admin/AdminDashboard";
import ExhibitionList from "../Admin/ExhibitionList";
import LoginPage from "../Admin/LoginPage";

// Create a Material UI theme
const theme = createTheme();

export const adminRoutes = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Refine
          authProvider={authProvider}
          options={{ syncWithLocation: true }}
        >
          <AdminDashboard />
        </Refine>
      </ThemeProvider>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "exhibitions", element: <ExhibitionList /> },
      { path: "login", element: <LoginPage /> },
      { path: "*", element: <Navigate to="/admin/login" replace /> },
    ],
  },
]);
