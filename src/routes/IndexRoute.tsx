import MainLayout from "@components/MainLayout";
import { RouteObject } from "react-router";

import LoginPage from "@/pages/LoginPage";

const IndexRoute: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};

export default IndexRoute;
