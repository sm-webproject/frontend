import MainLayout from "@components/MainLayout";
import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import IndexPage from "@/pages/IndexPage";
import ListPage from "@/pages/ListPage";
import LoginPage from "@/pages/LoginPage";

const IndexRoute: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
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

export default IndexRoute;
