import { RouteObject } from "react-router-dom";

import IndexPage from "@/pages/IndexPage";

/**
 * 로그인을 해야만 접근이 가능한 URL
 */
const AuthRoute: RouteObject[] = [
  {
    index: true,
    path: "/",
    element: <IndexPage />,
  },
];

export default AuthRoute;
