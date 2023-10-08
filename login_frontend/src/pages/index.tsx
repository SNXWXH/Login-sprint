import { RegisterForm, LoginForm } from '../components';
import { ROUTES } from '../Common/constants';
import { Login } from './Login';
import { Main } from './Main';
import { SignUp } from './SignUp';

interface Route {
  element: React.ReactNode; // JSX.Element는 React 컴포넌트 인스턴스가 아니며, 구체적인 React 엘리먼트 타입
  path?: string;
  children?: Route[];
}

export const PAGE_LIST: Route[] = [
  {
    element: <Login />,
    children: [
      {
        path: ROUTES.LOGIN.PATH,
        element: <LoginForm />,
      },
    ],
  },
  {
    element: <SignUp />,
    children: [
      {
        path: ROUTES.SIGN_UP.PATH,
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: ROUTES.MAIN.PATH,
    element: <Main />,
  },
  // {
  //   path: "*",
  //   element:<NotFound />
  // }
];
