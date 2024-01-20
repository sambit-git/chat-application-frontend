import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import LayoutMain from "../layouts/LayoutMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [{ index: true, element: <Login /> }],
  },
]);

const RouterMain = () => {
  return <RouterProvider router={router} />;
};

export default RouterMain;
