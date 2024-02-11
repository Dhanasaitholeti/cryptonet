import HomeScreen from "../pages/HomeScreen";
import NotFoundScreen from "../pages/NotFoundScreen";
import ProfileScreen from "../pages/ProfileScreen";

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
    path: "/:userid",
    element: <ProfileScreen />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
];
