import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import LayoutMain from "../layouts/LayoutMain";
import userActions from "../redux-store/userSlice";
import AppServices from "../services/app";
import { useDispatch } from "react-redux";
import Chats from "../pages/Chats";
import { action as loginAction } from "../components/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      { path: "chats", element: <Chats /> },
    ],
  },
]);

const RouterMain = () => {
  const dispatch = useDispatch();
  const isAuthenticated = AppServices.isAuthenticated();
  isAuthenticated.then((res) => {
    if (!res) dispatch(userActions.deleteUser());
    console.log("isAuthenticated: ", res);
  });
  return <RouterProvider router={router} />;
};

export default RouterMain;
