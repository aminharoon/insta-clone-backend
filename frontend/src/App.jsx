import React from "react";
import { RouterProvider } from "react-router";
import { routes } from "./app.routes.jsx";
import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostContextProvider } from "./features/posts/post.context.jsx";
const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={routes} />;
      </PostContextProvider>
    </AuthProvider>
  );
};
export default App;
