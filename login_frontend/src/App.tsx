import { PAGE_LIST } from "./pages/index";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes(PAGE_LIST);
  return routes;
};

export default App;
