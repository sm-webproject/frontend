import AuthRoute from "@routes/AuthRoute";
import IndexRoute from "@routes/IndexRoute";
import useAuth from "@store/useAuth";
import { RouteObject, useRoutes } from "react-router-dom";

const RootRoute = () => {
  const { user } = useAuth();
  const routes: RouteObject[] = [];

  routes.push(...IndexRoute);
  if (user) routes.push(...AuthRoute);

  return useRoutes(routes);
};

export default RootRoute;
