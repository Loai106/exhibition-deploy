import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Exhibitions from "../pages/Exhibitions";
import AppRoot from "./AppRoot";
import Artists from "../pages/Artists";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import ExhibitionDetail from "../pages/ExhibitionDetail";
import ArtistsDetails from "../pages/ArtistsDetails";

const Routes = () => {
  const Routing = createBrowserRouter([
    {
      path: "",
      element: <AppRoot />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/exhibitions",
          element: <Exhibitions />,
        },

        {
          path: "/exhibitions/:id",
          element: <ExhibitionDetail />,
        },

        {
          path: "/artists",
          element: <Artists />,
        },
        {
          path: "/artist/:id",
          element: <ArtistsDetails />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return Routing;
};

export default Routes;
