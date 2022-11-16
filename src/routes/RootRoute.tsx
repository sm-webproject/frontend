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
    routes.push(IndexRoute);
    if (user) routes.push(AuthRoute);
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
