import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Exhibitions from "../pages/Exhibitions";
import Root from "./Root";
import Artists from "../pages/Artists";
import NotFound from "../pages/NotFound";

const Routes = () => {
  const Routing = createBrowserRouter([
    {
      path: "",
      element: <Root />,
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
          path: "/artists",
          element: <Artists />,
        },{
          path: "*",
          element: <NotFound />,
        }
      ],
    },
  ]);
  return Routing;
};

export default Routes;
