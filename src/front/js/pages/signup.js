import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    fetch("https://solid-adventure-jx4vw656qj5fq76q-3001.app.github.dev/api/signup", opts)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There is an error");
      })
      .then((data) => {
        console.log(data);
       
        navigate("/login"); // Navigate to private page after successful signup
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  return (
    <div className="text-center mt-5">
      <h1>Sign Up</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  );
};
