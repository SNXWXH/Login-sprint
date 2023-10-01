import ROUTES from "../routes/routes";

import { Login } from "./Login";

interface Route {
  element: JSX.Element;
  path?: string;
  children?: Route[];
}

export const PAGE_LIST: Route[] = [
  { element: <Login />, path: ROUTES.LOGIN.PATH },
];
