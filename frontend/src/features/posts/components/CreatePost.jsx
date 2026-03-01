import React, { useRef, useState } from "react";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const { handleCreatePost } = usePost();
  const currentInputref = useRef();
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");

  const handleCreate_Post = (e) => {
    e.preventDefault();
    const file = currentInputref.current.files[0];
    handleCreatePost(caption, file);
    navigate("/");
  };

  return (
    <main>
      <div className="form-container">
        <h1>Create Post </h1>
        <form onSubmit={handleCreate_Post}>
          <input
            type="text"
            name="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter caption"
          />
          <input
            type="file"
            name="file"
            ref={currentInputref}
            placeholder="Upload the file "
          />{" "}
          <button className="button primary-button" type="submit">
            create post
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
