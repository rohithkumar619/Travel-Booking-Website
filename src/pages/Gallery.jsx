import React from "react";
import "../pages/styles/Gallery.css";
import { gallery } from "../components/Gallery/gallery";
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gal">
        <span>Gallery</span>
        <h3>Visit our customer tour gallery</h3>
        <div className="album">
          {gallery.map((image, i) => (
            <img className="image" src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
