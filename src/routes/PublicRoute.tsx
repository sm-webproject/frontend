import MainLayout from "@components/MainLayout";
import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import DetailPage from "@/pages/DetailPage";
import IndexPage from "@/pages/IndexPage";
import ListPage from "@/pages/ListPage";

const PublicRoute: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/list",
      element: <ListPage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ],
};

export default PublicRoute;
