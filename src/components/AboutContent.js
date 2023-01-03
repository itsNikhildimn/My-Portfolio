import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";



const AboutContent = () => {
  return (
   
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am Nikhil Dhiman, Full stack web developer, my expertise lies in
          building and maintaining dynamic, responsive websites and web
          applications. I have a strong foundation in both front-end and
          back-end technologies, including HTML, CSS, JavaScript, React js ,Node
          js and Mongo db. I have passion for continuously learning and staying
          up-to-date with the latest trends and best practices in web
          development.leatest techs, advancements in technologies have always
          facinates me to get knoweladge about these feilds . So i decided to
          choose a career related to these feilds which can help me to stay
          up-to-date with the leatest technologies. and i will always learn new
          skills and get good in these.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
         <div className="Home-img"></div>
      </div>
     
    </div>
   
  );
};

export default AboutContent;
