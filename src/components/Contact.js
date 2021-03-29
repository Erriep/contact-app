import React from "react";
import "./Contact.css";

const name = "Pierre Tabary";
const status = true;
const img =
  "https://img2.freepng.fr/20180203/egq/kisspng-pac-man-party-worlds-biggest-pac-man-ghosts-pac-man-ghost-png-clipart-5a7561dd869aa1.6524795115176422055513.jpg";

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={img} alt="" />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <div className={status ? "status-online" : "status-offline"}></div>
          <p className="status-text">{status ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
