import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Layout/routes";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Crimson Text", serif', // Set the Crimson Text font globally
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Routes()} />
      </ThemeProvider>
    </>
  );
}

export default App;
