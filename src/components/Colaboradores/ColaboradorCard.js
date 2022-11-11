import React from "react";
import "./ColaboradorCard.css";

function ColaboradorCard(props) {
  return (
    <div className="card-container">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHtxyr5oqN8DQ/profile-displayphoto-shrink_800_800/0/1642011069041?e=1670457600&v=beta&t=PMXtwAt03QMN5nuf1flqSzxbHqOwcA18DOe2pphZFXY"
          alt={props.name}
        />
      </header>
      <h1 className="bold-text">
        {props.name}
        <span className="normal-text">{props.age}</span>
      </h1>
      <h2 className="normal-text">{props.charge}</h2>
      <div className="social-container">
        <div className="followers">
          <h1 className="bold-text">{props.whatsapp}</h1>
          <h2 className="smaller-text">VISITAR</h2>
        </div>
        <div className="likes">
          <h1 className="bold-text">{props.likes}</h1>
          <h2 className="smaller-text">VISITAS</h2>
        </div>
      </div>
    </div>
  );
}

export default ColaboradorCard;
