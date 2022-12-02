import PublicRoute from "@routes/PublicRoute";
import { useEffect } from "react";
import { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";

import useAuth from "../store/useAuth";
import AuthRoute from "./AuthRoute";
import IndexRoute from "./IndexRoute";

const RootRoute = () => {
  const { loaded, initial, user } = useAuth();
  const routes: RouteObject[] = [];

  useEffect(() => {
    if (!loaded) {
      initial();
    }
  }, [initial, loaded]);

  if (loaded) {
    routes.push(PublicRoute);
    if (user) routes.push(AuthRoute);
    else routes.push(IndexRoute);
  }

  const route = useRoutes(routes);

  return (
    <>
      {/* <Splash show={loaded} />*/}
      {route}
    </>
  );
};

export default RootRoute;
