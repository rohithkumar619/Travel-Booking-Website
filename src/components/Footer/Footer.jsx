import React from "react";
import logo from "../../assets/images/logo.png";
import "../Footer/Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Navigate, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foot">
      <div className="footer">
        <div>
          <img src={logo} alt="" />
          <span>Book your tours and get exclusive offers and cashbacks.</span>
        </div>
        <div>
          <h4>Quick Links</h4>
          <NavLink className="quick" to="/">
            <span className="quick">Home</span>
          </NavLink>
          <NavLink className="quick" to="/login">
            <span>Login</span>
          </NavLink>
          <NavLink className="quick" to="/register">
            <span>Register</span>
          </NavLink>
        </div>
        <div>
          <h4>Contact</h4>
          <div>
            <FaLocationDot />
            <span>Address: Vadodara</span>
          </div>
          <div>
            <MdEmail />
            <span>Email: brohith619@gmail.com</span>
          </div>
          <div>
            <FaPhoneAlt />
            <span>Phone: 9398202266</span>
          </div>
        </div>
      </div>
      <span className="cpyright">
        Copyright 2024, design and developed by Rohith kumar Budumuru. All
        rights reserved
      </span>
    </div>
  );
};

export default Footer;
