import MainLayout from "@components/MainLayout";
import { RouteObject } from "react-router";

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
  ],
};

export default PublicRoute;
