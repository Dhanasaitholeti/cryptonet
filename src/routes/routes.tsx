import HomeScreen from "../pages/HomeScreen";
import NotFoundScreen from "../pages/NotFoundScreen";

export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
];
