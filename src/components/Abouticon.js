import "./AbouticonStyles.css";
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Abouticon = () => {
  return (
    <div className="icons">
        <Link> <FaFacebook className="linkicon" style={{color:"#3b5998"}}/> <h6>Facebook</h6> </Link>
        <Link> <FaInstagram className="linkicon" style={{color:"#ef0074"}}/><h6>Instagram</h6></Link>
        <Link> <FaTwitter className="linkicon" style={{color:"#58c3eb"}}/><h6>Twitter</h6> </Link>
         <Link><FaLinkedin className="linkicon" style={{color:"#3b3998"}}/><h6>Linkedin </h6></Link>
    </div>
  )
}

export default Abouticon;