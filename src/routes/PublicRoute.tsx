import MainLayout from "@components/MainLayout";
import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

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
