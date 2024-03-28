import React from "react";
import "../pages/styles/Confirmation.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";
import confirm from "../assets/images/confirm.png";
const Confirmation = () => {
  const { tourDetails, userData } = useContext(AppContext);
  return (
    <div className="confirmation">
      <Header />
      <div className="confirm">
        <div className="conf">
          <div>
            <img src={confirm} alt="" />
            <h4>
              Your booking in Travel World to {tourDetails.title} is confirmed
            </h4>
          </div>
          <h3>Thank you for booking in Travel World,</h3>
          <h4>
            Have a great day and Enjoy your trip on <span>{userData.date}</span>
          </h4>
          <div className="ticket">
            <div className="left-con">
              <img src={tourDetails.photo} alt="" />
            </div>
            <div className="right-con">
              <h3>Booking Details</h3>
              <div className="usersd">
                <span>
                  <span>Name: </span>
                  {userData.name}
                </span>
                <span>
                  <span>Phone: </span>
                  {userData.phone}
                </span>
              </div>
              <div className="det">
                <div>
                  <span>Booking:</span>
                  <h4>1011</h4>
                </div>
                <div>
                  <span>Date:</span>
                  <h4>{userData.date}</h4>
                </div>
                <div>
                  <span>Destination:</span>
                  <h4>{tourDetails.city}</h4>
                </div>
                <div>
                  <span>Total:</span>
                  <h4>${userData.total}</h4>
                </div>
                <div>
                  <span>status:</span>
                  <h4>Confirmed</h4>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/">
            <button className="returnhome">Return Back to Home</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
