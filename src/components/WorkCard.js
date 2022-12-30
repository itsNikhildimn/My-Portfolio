import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <div className="main">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btn">
          <NavLink to={props.view} className="btn">
            VIEW
          </NavLink>
          <NavLink to="url.com " className="btn">
            SOURCE
          </NavLink>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WorkCard;
