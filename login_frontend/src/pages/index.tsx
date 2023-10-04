import { SignUpForm, LoginBg } from "../components";
import { ROUTES } from "../routes";
import { Login } from "./Login";
import { Main } from "./Main";
import { SignUp } from "./SignUp";

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
        path: ROUTES.LOGIN.PATH,
        element: <LoginBg />,
      },
    ],
  },
  {
    element: <SignUp />,
    children: [
      {
        path: ROUTES.SIGN_UP.PATH,
        element: <SignUpForm />,
      },
    ],
  },
  {
    path: ROUTES.MAIN.PATH,
    element: <Main />,
  },
];
