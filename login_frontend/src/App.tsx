// import React from "react";
import { useRoutes } from "react-router-dom";

import { PAGE_LIST } from "./pages";

// import "./App.css";

function App() {
  const routes = useRoutes(PAGE_LIST);
  return routes;
}

export default App;
