import "./WorkCardStyles.css";
import React from "react";


const WorkCard = (props) => {
  return (
    <div className="project-card">
      <div className="main">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btn">
          <a href={props.view} className="btn">
            VIEW
          </a>
          <a href="url.com " className="btn">
            SOURCE
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WorkCard;
