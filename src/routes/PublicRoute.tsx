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
      index: true,
      element: <IndexPage />,
    },
    {
      path: "/board",
      element: <ListPage />,
    },
    {
      path: "/board/:id",
      element: <DetailPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ],
};

export default PublicRoute;
