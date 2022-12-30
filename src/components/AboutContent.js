import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/react1.jpg";
import img2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a React front-end developer. I create responsive secure websites for my clintes.</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
       
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} alt="reactimg1"/>
                </div>
                <div className="img-stack bottom">
                    <img src={img2} alt="reactimg2"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent