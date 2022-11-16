import { Navigate, RouteObject } from "react-router-dom";

import IndexPage from "@/pages/IndexPage";
import WebappFactoryPage from "@/pages/WebappFactoryPage";

const IndexRoute: RouteObject[] = [
  {
    index: true,
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/webapp",
    element: <WebappFactoryPage />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
];

export default IndexRoute;
