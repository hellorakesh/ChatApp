import React from "react";
import { FaKeyboard, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "../styles/styles.css";
import logo from "../chat-logo.png";

const Sidebar = ({ muted, setMuted, away, setAway }) => {
  return (
    <div className="sidebar">
      <div className="logo"><img src={logo} alt="Logo" width="62" /></div>
      <hr></hr>
      <button className="button" onClick={() => setAway(!away)}>
        <FaKeyboard className="me-2" /> {away ? "Back Online" : "Away from Keyboard"}
      </button>
      <button className="button" onClick={() => setMuted(!muted)}>
        {muted ? <FaVolumeUp className="me-2" /> : <FaVolumeMute className="me-2" />} {muted ? "Unmute" : "Mute"}
      </button>
      <h5>Channels</h5>
      <ul>
        <li>#Dimond</li>
        <li>#Black King</li>
        <li>#Dinomo</li>
      </ul>
      <h5>Online Users</h5>
      <div className="navCard">
      <ul>
        <li>Roman</li>
        <li>Stranger</li>
        <li>Stranger2</li>
        <li>Zoro</li>
        <li>Luffy</li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
