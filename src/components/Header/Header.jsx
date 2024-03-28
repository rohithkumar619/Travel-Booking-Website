import React, { useState } from "react";
import "../Header/Header.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
const Header = ({ showNavLinks, bars }) => {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    if (bar === false) {
      setBar(true);
    } else {
      setBar(false);
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      {showNavLinks && (
        <ul className={`navto ${bar ? "navtoo" : "navto"} `}>
          <Link className="el" to="home" smooth={true}>
            <li>Home</li>
          </Link>

          <Link className="el" to="Tours" smooth={true}>
            <li>Tours</li>
          </Link>
          <Link className="el" to="gallery" smooth={true}>
            <li>Gallery</li>
          </Link>
          <Link className="el" to="subscribe" smooth={true}>
            <li>Feedback</li>
          </Link>
        </ul>
      )}
      <div className="signup">
        <NavLink className="el" to="/login">
          <li>Login</li>
        </NavLink>
        <NavLink to="/register" className="el register">
          <span>Register</span>
        </NavLink>
        {bars && <FaBars className="bars" onClick={handleClick} />}
      </div>
    </div>
  );
};

export default Header;
