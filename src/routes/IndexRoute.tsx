import { RouteObject } from "react-router";

import IndexPage from "@/pages/IndexPage";

import MainLayout from "../components/MainLayout";
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
    {
      path: "/",
      element: <IndexPage />,
    },
  ],
};

export default IndexRoute;
