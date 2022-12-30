import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location"  >
            <FaHome  id="faicon" size={20} style={{  marginRight: "2rem" ,color :"white"}} />
            <div>
              <p>123 Housing Socity</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone"  >
            <h4>
              {" "}
              <FaPhone id="faicon"
                size={20}
                style={{  marginRight: "2rem" ,color :"#ff6a3d"}}
              />
              123-345-567
            </h4>
          </div>
          <div className="email" >
            <FaMailBulk   id="faicon"
              size={20}
              style={{ marginRight: "2rem" ,color :"white" }}
            />
            <div>
              <p>Nikhildhiman@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            This is me Nikhil Dhiman, Full Stack Developer, I enjoy disscussing
            new projects and design challenges
          </p>
          <div className="social">
            <FaFacebook
             style={{ marginRight: "2rem" ,color :"#3b5998" }}
            id="faicon"
              size={40}
            
            />
            <FaInstagram
           style={{ marginRight: "2rem" ,color :"#ef0074" }}
             id="faicon"
              size={40}
            
            />
            <FaTwitter
             id="faicon"
             style={{ marginRight: "2rem" ,color :"#58c3eb" }}
              size={40}
        
            />
            <FaLinkedin
             id="faicon"
             style={{ marginRight: "2rem" ,color :" #007dbe" }}
              size={40}
 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
