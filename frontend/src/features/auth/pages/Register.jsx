import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const Register = () => {
  const { loading, handleregister, user } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [bio, setBio] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleregister(username, email, bio, password);
    console.log("registration successfully hope you enjoy now ");
    navigate("/login");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading ......</h1>
      </main>
    );
  }
  return (
    <>
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <input
              type="text"
              name="bio"
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter bio"
            />{" "}
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button className="button primary-button" type="submit">
              Register
            </button>
          </form>
          <p>
            Already have an account? <Link to={"/login"}>login</Link>
          </p>
        </div>
      </main>
    </>
  );
};
