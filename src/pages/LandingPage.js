// src/pages/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="">
      {/* Header Section */}
      <header className="py-5">
        <h1 className="text-danger">Welcome to the</h1>
        <h2 className="fw-bold">No Name Chat!</h2>
        <p>Random Chat is an easy and anonymous way to meet new people online.</p>
        <button className="join-button" onClick={() => navigate("/chat")}>
        Join Chat
      </button>
        <div className="d-flex justify-content-center gap-3">
          <span className="text-danger">📶 22,966 Online</span>
          <span className="text-warning">👥 2,974,615 Joined</span>
        </div>
      </header>

      {/* Join Chat Section */}
      <div className="d-flex flex-column align-items-center">
        <input type="text" className="form-control w-50" placeholder="Enter a username" />
        <div className="my-2">
          <input type="checkbox" id="reserve" /> <label htmlFor="reserve">Reserve username</label>
          <input type="checkbox" id="stealth" className="ms-3" /> <label htmlFor="stealth">Enable stealth mode 👻</label>
        </div>
        <input type="text" className="form-control w-50" placeholder="Add your interests (optional)" />
        <button className="btn btn-primary mt-3">🔍 Join Chat</button>
      </div>

      {/* What We Do Section */}
      <section className="my-5">
        
        <div className="container">
       <div className="row align-items-center">
          <div className="col-md-6">
           <h3 className="fw-bold">What We Do</h3>
            <p>
              Experience <span className="text-primary">true anonymity</span>,
              <span className="text-danger"> free speech</span>, and the nostalgia of early internet days. Have fun
              without judgment or tracking. <strong>We do NOT sell your data.</strong>
            </p>
          </div>
          <div className="col-md-6">
            <img src="/path-to-image.jpg" alt="What We Do" className="img-fluid" />
          </div>
        </div>
        </div>
      </section>

      {/* Why We’re Different Section */}
      <section className="bg-light py-5">
      <div className="container">
       <div className="row align-items-center">
          <div className="col-md-6">
          <h3 className="fw-bold">Why We’re Different</h3>
          <p>
              Connect with people based on interests and enjoy meaningful conversations. Our AI-powered chat enhances
              user safety, making it a better choice than random video chat sites.
            </p>
          </div>
          <div className="col-md-6">
          <img src="/path-to-image.jpg" alt="Why We’re Different" className="img-fluid" />
           
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="my-5 text-center">
      <div className="container">
       <div className="row">
        <div className="col-md-4">
          <h5>🔒 Private & Discreet</h5>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="col-md-4">
          <h5>👥 Diverse Community</h5>
          <p>Connect with like-minded people globally.</p>
        </div>
        <div className="col-md-4">
          <h5>👍 Easy to Use</h5>
          <p>No registration required. Just join and start chatting.</p>
        </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white text-center">
        <div className="container">
            <div className="row">
            <div className="col-12">
                 <p>© 2025 All Rights Reserved.</p>
            </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
