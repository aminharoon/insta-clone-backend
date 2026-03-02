import React from "react";
import { Link } from "react-router";

const Post = ({ user, post }) => {
  console.log(post.isLiked);
  return (
    <div className="post">
      <div className="user">
        <Link to={`/profile/${user.username}`}>
          <img src={user.profile_pic} alt="" />
        </Link>
        <p>
          <Link to={`/profile/${user.username}`}>@{user.username}</Link>
        </p>
      </div>
      <img src={post.image_url} alt="" />
      <div className="icons">
        {post.isLiked ? (
          <button>
            <i class="ri-heart-2-fill isLiked"></i>
          </button>
        ) : (
          // <i class="ri-heart-line "></i>
          <button>
            <i class="ri-heart-line "></i>
          </button>
        )}
      </div>
      <div className="bottom">
        <p className="caption">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;
