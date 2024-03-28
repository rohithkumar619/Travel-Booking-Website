import React from "react";
import Header from "../components/Header/Header";
import user from "../assets/images/user.png";
import login from "../assets/images/login.png";
import "../pages/styles/Login.css";
import Footer from "../components/Footer/Footer";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login">
      <Header />
      <div className="login">
        <div className="login-l">
          <img src={login} alt="" />
        </div>
        <div className="login-r">
          <img className="user" src={user} alt="" />
          <h2>Login</h2>
          <form action="" className="form">
            <input type="text" placeholder="Enter Email:" />
            <input type="password" placeholder="Enter password:" />
            <button>Login</button>
          </form>
          <span>
            Don't have an account?
            <NavLink to="/register">
              <span> Register</span>
            </NavLink>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
