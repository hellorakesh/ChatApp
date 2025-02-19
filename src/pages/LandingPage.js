// src/pages/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to ChatApp</h1>
      <button className="join-button" onClick={() => navigate("/chat")}>
        Join Chat
      </button>
    </div>
  );
};

export default LandingPage;
