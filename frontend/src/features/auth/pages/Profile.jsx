import React, { useEffect } from "react";
import "../style/profile.scss";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useParams } from "react-router";

const Profile = () => {
  const { user, loading, handlegetprofile } = useAuth();
  const { username } = useParams();
  useEffect(() => {
    handlegetprofile(username);
  }, [username]);

  if (loading) {
    return (
      <main className="profile-page">
        <h2>Loading...</h2>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="profile-page">
        <h2>Loading...</h2>
      </main>
    );
  }

  return (
    <main className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-pic">
            <img src={user.profile_pic} alt="profile" />
          </div>
          <div className="profile-details">
            <div className="follow-con">
              <h2>@{user.username}</h2>
              <button className="button primary-button">
                {user.isFollowed ? "unfollow" : "follow"}
              </button>
            </div>

            <div className="profile-stats">
              <span>
                <strong>12</strong> posts
              </span>
              <span>
                <strong>{user.followersCount}</strong> followers
              </span>
              <span>
                <strong>{user.followingCount}</strong> following
              </span>
            </div>
            <div className="profile-bio">
              <p>{user.bio || "No bio yet..."}</p>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="profile-posts">
          <div className="profile-post-item">
            <img
              src="https://images.unsplash.com/photo-1599719574316-e32146edacb1?q=80&w=710&auto=format&fit=crop"
              alt="post"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
