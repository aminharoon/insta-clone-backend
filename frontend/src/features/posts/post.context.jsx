import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState("");
  return (
    <PostContext.Provider
      value={{
        feed,
        setFeed,
        loading,
        setLoading,
        post,
        setPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
