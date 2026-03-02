import { createBrowserRouter } from "react-router";
import { Login } from "./features/auth/pages/Login.jsx";
import { Register } from "./features/auth/pages/Register.jsx";
import Feed from "./features/posts/pages/Feed.jsx";
import Profile from "./features/auth/pages/Profile.jsx";
import CreatePost from "./features/posts/components/CreatePost.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/logout",
    element: <Login />,
  },

  {
    path: "/profile/:username",
    element: <Profile />,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "*",
    element: "Page not found 404",
  },
]);
