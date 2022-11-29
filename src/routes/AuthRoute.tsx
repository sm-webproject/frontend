import MainLayout from "@components/MainLayout";
import { RouteObject } from "react-router";

import MyPage from "@/pages/MyPage";
import WritePage from "@/pages/WriteBoardPage";

/**
 * 로그인을 해야만 접근이 가능한 URL
 */
const AuthRoute: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/write",
      element: <WritePage />,
    },
    {
      path: "/mypage",
      element: <MyPage />,
    },
  ],
};

export default AuthRoute;
