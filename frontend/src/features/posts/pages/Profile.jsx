import React, { useEffect } from "react";
import "../style/profile.scss";
import { useAuth } from "../../auth/hooks/useAuth";

const Profile = () => {
  const { user, loading, handlegetprofile } = useAuth();

  useEffect(() => {
    handlegetprofile();
  }, []);

  if (loading || !user) {
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
            <img
              src={
                user.profile_pic ||
                "https://ik.imagekit.io/se7odunboq/profile-placeholder-image-gray-silhouette-no-photo-profile-placeholder-image-gray-silhouette-no-photo-person-avatar-123478438.webp?updatedAt=1772272652690"
              }
              alt="profile"
            />
          </div>
          <div className="profile-details">
            <h2>@{user.username}</h2>
            <div className="profile-stats">
              <span>
                <strong>12</strong> posts
              </span>
              <span>
                <strong>345</strong> followers
              </span>
              <span>
                <strong>123</strong> following
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
