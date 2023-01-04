import "./HeroimgStyle.css";
import React from 'react';
import { Link } from "react-router-dom";

const Heroimg = () => {
  return <div className="hero">
    <div className="mask">
   
    <div className="content">
      <div className="contentleft">
        <p>HI, I'M NIKHIL DHIMAN </p>
        <h1>Full Stack Developer.</h1>
        <div>
          <Link to="project" className="btn">Projects</Link>
          <Link to="contact" className="btn-light">Contact</Link>
        </div>
      </div>
      <div className="contentright">
        <div className="contentprofile"></div>
      </div>
    </div>
    </div>
  </div>
}

export default Heroimg;