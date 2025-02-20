// src/pages/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/landingpage.css";
import whatImage from '../what.png';
import chatImage from '../chat.png';
import whyImage from '../why.png';
import privateImage from '../private.svg';
import diverseImage from '../diverse.svg';
import easyImage from '../easy.svg';
import logo from "../chat-logo.png";
import onlineImage from '../online.svg';
import userImage from "../user.svg";
import chatwhiteImage from "../chat-white-icon.png";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="">

      {/* Join Chat Section */}
      <section className="hero-banner">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto" >
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="first-col">
                  <img src={chatImage} alt="logo" className="img-fluid logo-img" />
                  </div>
                    <div className="seconed-col">
                    <h1 className="banner-title">Welcome to the <br></br> <span>No Name Chat!</span> </h1>
                   
                    </div>

                </div>
       
        <p className="text-center banner-desc">Random Chat is an easy and anonymous way to meet new people online.</p>
       
        <div className="d-flex justify-content-center userstate">
          <span className="text-danger"> <img src={onlineImage} alt="online" className="img-fluid icon-img" /> 22,966 <span className="inner-content">Online</span> </span>
          <span className=""> <img src={userImage} alt="users" className="img-fluid icon-img" /> 2,974,615   <span className="inner-content">Joined</span></span>
        </div>
      <div className="d-flex flex-column w-100">
      <div className="d-flex  align-items-center w-100 form-wrap">
        <input type="text" className="form-control" placeholder="Enter a username" />
        <button className="join-button" onClick={() => navigate("/chat")}>
        <img src={chatwhiteImage} alt="users" className="img-fluid button-icon" />  Join Chat
      </button> 
        </div>
        <div className="my-3">
          <input type="checkbox" id="reserve" /> <label htmlFor="reserve">Reserve username</label>
          <input type="checkbox" id="stealth" className="ms-3" /> <label htmlFor="stealth">Enable stealth mode 👻</label>
        </div>
        <input type="text" className="form-control interst" placeholder="Add your interests (optional)" />
       
      </div>
                </div>
            </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="">
        
        <div className="container">
       <div className="row align-items-center">
          <div className="col-lg-6 col-12 order-2 order-lg-1 sm-text">
           <h3 className="section-title">What We Do</h3>
            <p className="section-desc">
            Experience  <span className="text-danger"> true anonymity, free 💬speech, </span> and the nostalgia of the early days of the 🛜 internet. Careless 💕fun, meet people and be the <span className="text-danger">  real you </span> without the fear of being judged or canceled. 
            <span className="text-danger"> No email, no phone number, no tracking, 
            no storing any of your data or messages.</span> ALL your data vanishes when you leave. We do  <span className="text-danger"> NOT </span>sell your data we do <span className="text-danger"> NOT </span> sell you.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center order-1 order-lg-2">
            <img src={whatImage} alt="What We Do" className="img-fluid" />
          </div>
        </div>
        </div>
      </section>

      {/* Why We’re Different Section */}
      <section className="why-section bg-color">
      <div className="container">
       <div className="row align-items-center">
          <div className="col-lg-6 col-12 text-center">
           <img src={whyImage} alt="Why We’re Different" className="img-fluid" /> 
          </div>
          <div className="col-lg-6 col-12 sm-text">
            <h3 className="section-title">Why We’re Different</h3>
            <p className="section-desc">
            Our platform is special because you can connect with people based on interests and enjoy more meaningful chats with others who like the same things you do. our chat system uses AI to enhance user safety, making it a safer choice compared to many other random video chat sites. Plus, no annoying ads means you can enjoy anonymous chats without any interruptions, letting you focus on 
            your chat partners.
                </p>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center ft-section">
      <div className="container">
       <div className="row">
        <div className="col-md-4 ft-card">
        <div className="ft-card">
        <img src={privateImage} alt="Private & Discreet" className="img-fluid" /> 
          <h5>Private & Discreet</h5>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        </div>
        <div className="col-md-4">
        <div className="ft-card">
        <img src={diverseImage} alt="Diverse Community" className="img-fluid" />
          <h5>Diverse Community</h5>
          <p>Connect with like-minded people globally.</p>
        </div>
        </div>
        <div className="col-md-4">
        <div className="ft-card">
        <img src={easyImage} alt="Easy to Use" className="img-fluid" />
          <h5>Easy to Use</h5>
          <p>No registration required. Just join and start chatting.</p>
        </div>
        </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white text-center">
       <div className="footer-top">
        <div className="container">
                <div className="row">
                <div className="col-12">
                <img src={chatImage} alt="logo img" className="img-fluid footer-logo" />
                </div>
                </div>
            </div>
       </div>
       <div className="footer-bottom">
       <div className="container">
            <div className="row">
            <div className="col-12">
                 <p>© 2025 All Rights Reserved.</p>
            </div>
            </div>
        </div>
       </div>
      </footer>
    </div>
  );
};

export default LandingPage;
