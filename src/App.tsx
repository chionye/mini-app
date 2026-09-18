/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./router";

function App() {
  const myRoutes = createBrowserRouter(Routes);

  return <RouterProvider router={myRoutes} />;
}

export default App;
