import React from "react";
import "../Styles/GameStyle.scss";

export const GamePage = () => {
  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer--background"></div>
      <div className="parallax__layer parallax__layer--background2"></div>
      <div className="parallax__layer parallax__layer--background3"></div>
      <div className="parallax__layer parallax__layer--base">
        <div className></div>
      </div>
    </div>
  );
};
