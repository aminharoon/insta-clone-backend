import React, { useEffect } from "react";
import { Link } from "react-router";
import "./personalInfo.scss";
import { useAuth } from "../../auth/hooks/useAuth";

const PersonalInfo = () => {
  const { user, handleLogout } = useAuth();

  return (
    <div className="personal-info">
      <button className="profile-pic-button">
        <Link to={`/profile/${user.username}`}>Profile</Link>
      </button>
      <button className="profile-pic-button ">
        <Link to={`/logout`} onClick={() => handleLogout()}>
          Logout
        </Link>
      </button>
      <button className="create-post-button ">
        <Link to="/create-post">Create Post</Link>
      </button>
    </div>
  );
};

export default PersonalInfo;
