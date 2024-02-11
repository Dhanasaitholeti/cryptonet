import { Route, Routes } from "react-router-dom";
import { IRoute, routes } from "./routes";

const RouteManager = () => {
  return (
    <Routes>
      {routes.map((route: IRoute) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default RouteManager;
