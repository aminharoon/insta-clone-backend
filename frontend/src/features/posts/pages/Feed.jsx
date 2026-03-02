import React from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";

import PersonalInfo from "../../shared/components/PersonalInfo";

const Feed = () => {
  const { feed, loading, handleGetFeed, post } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, [post]);
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
            <PersonalInfo />
            {feed
              .filter((post) => post)
              .map((post) => (
                <Post key={post._id} user={post.user} post={post} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
