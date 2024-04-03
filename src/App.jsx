import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApplicationScreen } from "./screens/ApplicationScreen";
import { ApplicationScreenScreen } from "./screens/ApplicationScreenScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { DfDashboardLgtLg } from "./screens/DfDashboardLgtLg";
import { DfDashboardDrkSm } from "./screens/DfDashboardDrkSm";
import { DfDashboardDrkLg } from "./screens/DfDashboardDrkLg";
import { DfDashboard } from "./screens/DfDashboard";
import { DfDashboardScreen } from "./screens/DfDashboardScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DfDashboardDrkLg />,
  },
  {
    path: "/2",
    element: <ApplicationScreenScreen />,
  },
  {
    path: "/6",
    element: <DfDashboardDrkLg />,
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
