import React from "react";
import { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, loading, handlelogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handlelogin(username, password);
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading.....</h1>
      </main>
    );
  }
  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button className="button primary-button" type="submit">
              Login
            </button>
          </form>
          <p>
            Don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </main>
    </>
  );
};
