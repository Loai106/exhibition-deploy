import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Layout/routes";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { adminRoutes } from "./Layout/adminRoutes";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Crimson Text", serif', // Set the Crimson Text font globally
    },
  });
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={isAdminRoute ? adminRoutes : Routes()} />
      </ThemeProvider>
    </>
  );
}

export default App;
