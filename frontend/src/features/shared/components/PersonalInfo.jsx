import React from "react";
import { Link } from "react-router";
import "./personalInfo.scss";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <button className="profile-pic-button">
        <Link to={"/profile"}>Profile</Link>
      </button>
      <button className="create-post-button">craete post</button>
    </div>
  );
};

export default PersonalInfo;
