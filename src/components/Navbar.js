import "./NavbarStyles.css"


import React from 'react'
import { Link ,NavLink } from "react-router-dom";
import {FaBars , FaTimes} from "react-icons/fa";
import { useState } from "react"


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY  >=100){
            setColor(true)
        }else{
            setColor(false)
        }
    };
    window.addEventListener("scroll" , changeColor);
  return (
    <div className={color ? "header header-bg" :
 "header"}>
    <div className="header">
        <div className="logo">
        <NavLink to = "/">
            <h1>Nikhil</h1>
        </NavLink>
        </div>
        <ul className="nav-menu">
            <li>
                <NavLink exact activeClassName = "active" to ="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName = "active" to ="/project">Project</NavLink>
            </li>
            <li>
                <NavLink activeClassName = "active" to ="/about">About</NavLink>
            </li>
            <li>
                <NavLink activeClassName = "active" to ="/contact">Contact</NavLink>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
   <FaTimes size={20} style={{color: "#fff" }}/>
            ):(
                <FaBars size={20} style={{color: "#fff" }}/>
            )}
        </div>
    </div>
    </div>
  )
}

export default Navbar