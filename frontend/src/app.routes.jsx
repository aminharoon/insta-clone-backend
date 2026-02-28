import { createBrowserRouter } from "react-router";
import { Login } from "./features/auth/pages/Login.jsx";
import { Register } from "./features/auth/pages/Register.jsx";
import Feed from "./features/posts/pages/feed.jsx";
import Profile from "./features/posts/pages/Profile.jsx";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: "Page not found 404",
  },
]);
