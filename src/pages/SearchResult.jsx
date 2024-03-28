import React, { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "../pages/styles/SearchResult.css";
const SearchResult = () => {
  const loactionRef = useRef("");
  const distanceRef = useRef(0);
  const maxPeopleRef = useRef(0);

  const handleRefs = () => {
    const location = loactionRef.current.value;
    const distance = distanceRef.current.value;
    const maxpeople = maxPeopleRef.current.value;

    if (location === "" && distance === "" && maxpeople === "") {
      return alert("All fields are required!");
    } else {
      console.log(location, distance, maxpeople);
    }
  };
  return (
    <div className="options5">
      <div className="options">
        <div>
          <FaLocationDot />
          <div>
            <span>Location</span>
            <input
              className="input"
              type="text"
              placeholder="Where are you going?"
              ref={loactionRef}
            />
          </div>
        </div>
        <div>
          <GiPathDistance />
          <div>
            <span>Distance</span>
            <input
              className="input"
              type="text"
              placeholder="Distance k/m"
              ref={distanceRef}
            />
          </div>
        </div>
        <div>
          <FaPeopleGroup />
          <div>
            <span>Max People</span>
            <input
              className="input"
              type="text"
              placeholder="0"
              ref={maxPeopleRef}
            />
          </div>
        </div>
        <div>
          <CiSearch className="search" onClick={handleRefs} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
