import "./AbouticonStyles.css";
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Abouticon = () => {
  return (
    <div className="icons">
        <a href="'https://github.com/itsNikhildimn'"> <FaGithub className="linkicon" style={{color:"#ff6a3d"}}/> <h6>Github</h6> </a>
        <a href="https://www.instagram.com/nikhil_dhiman01/"> <FaInstagram className="linkicon" style={{color:"#ef0074"}}/><h6>Instagram</h6></a>
        <a href="https://twitter.com/NikhilD54153797"> <FaTwitter className="linkicon" style={{color:"#58c3eb"}}/><h6>Twitter</h6> </a>
         <a href="https://www.linkedin.com/in/nikhil-dhiman-358167229/"><FaLinkedin className="linkicon" style={{color:"#3b3998"}}/><h6>Linkedin </h6></a>
    </div>
  )
}

export default Abouticon;