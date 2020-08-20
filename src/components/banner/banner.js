import React from "react";
import "./banner.css";

const Banner = () => (
  <div className="banner text-center d-flex align-items-center">
    <p className="m-0">
      This is the memory game!
      Everytime you click an image you haven't already clicked you earn a point!
      Once you choose a card, the game will shuffle
      </p>
  </div>
);

export default Banner;