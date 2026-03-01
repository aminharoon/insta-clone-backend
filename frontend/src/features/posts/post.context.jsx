import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState("");
  return (
    <PostContext.Provider
      value={{
        feed,
        setFeed,
        loading,
        setLoading,
        post,
        setPost,
        caption,
        setCaption,
        file,
        setFile,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
