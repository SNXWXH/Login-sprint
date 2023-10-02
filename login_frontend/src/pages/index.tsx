import BackgroundForm from "../components/signup/SignUp";
import { SignUp } from "./SignUp";
import ROUTES from "../routes/routes";

interface Route {
  element: JSX.Element;
  path?: string;
  children?: Route[];
}

export const PAGE_LIST: Route[] = [
  {
    element: <SignUp />,
    children: [
      {
        path: ROUTES.SIGN_UP.PATH,
        element: <BackgroundForm />,
      },
    ],
  },
];
