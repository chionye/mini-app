/** @format */

import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { AuthLayout } from "../components/layouts/auth/Layout";
import { Outlet } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { Home } from "../pages/Home";

export const Routes = [
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
