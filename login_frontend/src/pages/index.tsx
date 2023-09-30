import ROUTES from "../routes/routes";
import { LoginBg } from "../components";
import { Login } from "./Login";

interface Route {
  element: JSX.Element;
  path?: string;
  children?: Route[];
}

export const PAGE_LIST: Route[] = [
  {
    element: <Login />,
    children: [
      {
        element: <LoginBg />,
        path: ROUTES.LOGIN.PATH,
      },
    ],
  },
];
