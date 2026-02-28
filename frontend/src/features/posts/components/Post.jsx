import React from "react";
import { Link } from "react-router";

const Post = ({ user, post }) => {
  const profile = (id) => {
    console.log("this function has been called");
    console.log(id);
  };

  return (
    <div className="post">
      <div className="user">
        <Link to={"/profile"}>
          <img src={user.profile_pic} alt="" />
        </Link>
        <p>
          <Link to={`/profile/${user.username}`}>@{user.username}</Link>
        </p>
      </div>
      <img src={post.image_url} alt="" />
      <div className="bottom">
        <p className="caption">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;
