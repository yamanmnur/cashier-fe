import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const BaseLayout = lazy(() => import("@/layouts/base-layout"));

const LoginPage = lazy(() => import("@/pages/login"));
const RegisterPage = lazy(() => import("@/pages/register"));

const routes = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
]);

export default routes;
