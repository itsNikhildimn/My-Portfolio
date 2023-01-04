import React from "react";
import { FaFileCode, FaTrophy, FaUsers } from "react-icons/fa";
import "./ExpertiesCardsStyles.css";
import img1 from "../assets/react1.jpg";
import img2 from "../assets/react2.webp";
const Expertiescard = () => {
    return (
        <div className="ExpSkills">
            <div className="Left">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img1} alt="reactimg1" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={img2} alt="reactimg2" />
                    </div>
                </div>
            </div>
            <div className="ExpCards">
                <div className="colcard">
                    <FaTrophy color="#e31b6d" />
                    <h1>Experience</h1>
                    <span>3+ Years Working</span>
                </div>
                <div className="colcard">
                    <FaUsers color="#e31b6d" />
                    <h1>Clints</h1>
                    <span>100+ Worldwide</span>
                </div>
                <div className="colcard">
                    <FaFileCode color="#e31b6d" />
                    <h1>Projects</h1>
                    <span>50+ Completed</span>
                </div>
            </div>
        </div>
    );
};

export default Expertiescard;
