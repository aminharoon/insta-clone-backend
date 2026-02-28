import React from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";
import { Link } from "react-router";
import { useAuth } from "../../auth/hooks/useAuth";

const Feed = () => {
  const { feed, loading, handleGetFeed, post } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);
  if (loading || !feed) {
    return (
      <main>
        <h1>Loading .....</h1>
      </main>
    );
  }
  console.log(feed);
  return (
    <main>
      <div className="feed-page">
        <div className="feed">
          <div className="posts">
            <div className="personal-info">
              <button className="profile-pic-button">
                <Link to={"/profile"}>Profile</Link>
              </button>
              <button className="create-post-button">craete post</button>
            </div>
            {feed.map((post) => (
              <Post key={post._id} user={post.user} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
