import React from "react";
import { Link } from "react-router";
import { usePost } from "../hooks/usePost";

const Post = ({ user, post }) => {
  const { loading, handleLike } = usePost();

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
          <div className="like_icons" onClick={() => handleLike(post._id)}>
            <i class="ri-heart-2-fill isLiked"></i>
          </div>
        ) : (
          <div className="unlike_icons" onClick={() => handleLike(post._id)}>
            <i class="ri-heart-line "></i>
          </div>
        )}
      </div>

      {/* <div className="icons" onClick={() => handleLike(post._id)}>
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
      </div> */}
      <div className="bottom">
        <p className="caption">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;
