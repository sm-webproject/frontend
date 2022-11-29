import { RouteObject } from "react-router";

import IndexPage from "@/pages/IndexPage";
import WritePage from "@/pages/WriteBoardPage";

import MainLayout from "../components/MainLayout";
import InfoPage from "../pages/DetailPage";
import ListPage from "../pages/ListPage";

const IndexRoute: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/list",
      element: <ListPage />,
    },
    {
      path: "/write",
      element: <WritePage />,
    },
    {
      path: "/detail",
      element: <InfoPage />,
    },
    {
      path: "/",
      element: <IndexPage />,
    },
  ],
};

export default IndexRoute;
