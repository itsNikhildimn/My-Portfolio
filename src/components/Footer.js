import React from "react";
import {
  FaGithub,
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
              <p>Mohali 4 Phase, Chandigarh</p>
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
              +91 82190-90574
            </h4>
          </div>
          <div className="email" >
            <FaMailBulk   id="faicon"
              size={20}
              style={{ marginRight: "2rem" ,color :"white" }}
            />
            <div>
              <p>Dhimannihkil905@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            This is me Nikhil Dhiman, Full Stack Developer, I enjoy disscussing
            new projects and design challenges.
          </p>
          <div className="social">
           <a href='https://github.com/itsNikhildimn'> <FaGithub
             style={{ marginRight: "2rem" ,color :"#ff6a3d" }}
            id="faicon"
              size={40}
            
            /></a>
           
            <a href="https://www.instagram.com/nikhil_dhiman01/"><FaInstagram  
           style={{ marginRight: "2rem" ,color :"#ef0074" }}
             id="faicon"
              size={40}
            /> </a>


            <a href="https://twitter.com/NikhilD54153797">
            <FaTwitter
             id="faicon"
             style={{ marginRight: "2rem" ,color :"#58c3eb" }}
              size={40}
            /></a>

            <a href="https://www.linkedin.com/in/nikhil-dhiman-358167229/">
            <FaLinkedin
             id="faicon"
             style={{ marginRight: "2rem" ,color :" #007dbe" }}
              size={40}
            /></a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
