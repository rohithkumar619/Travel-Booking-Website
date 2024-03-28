import React from "react";
import Header from "../components/Header/Header";
import user from "../assets/images/user.png";
import login from "../assets/images/login.png";
import "../pages/styles/Register.css";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";
const Register = () => {
  return (
    <div className="Registers">
      <Header />
      <div className="registers">
        <div className="reg-l">
          <img src={login} alt="" />
        </div>
        <div className="reg-r">
          <img className="user2" src={user} alt="" />
          <h2>Register</h2>
          <form action="" className="form2">
            <input type="text" placeholder="Enter Name:" />
            <input type="text" placeholder="Enter Email:" />
            <input type="password" placeholder="Create password:" />
            <button>Register</button>
          </form>
          <span>
            Don't have an account?
            <NavLink to="/login">
              <span> Login</span>
            </NavLink>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
