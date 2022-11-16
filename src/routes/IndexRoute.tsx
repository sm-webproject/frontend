import MainLayout from "../components/MainLayout";
import { RouteObject } from "react-router";

import InfoPage from "../pages/InfoPage";
import UploadPage from "../pages/UploadPage";

const IndexRoute: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/upload",
      element: <UploadPage />,
    },
    {
      path: "/info",
      element: <InfoPage />,
    },
  ],
};

export default IndexRoute;
