import React from "react";
import "../Styles/GameStyle.scss";

export const GamePage = () => {
  return (
    <div class="parallax">
      <div class="parallax__layer parallax__layer--background">
        <div class="title">This is the background</div>
      </div>
      <div class="parallax__layer parallax__layer--background2">
        <div class="title">This is the background2</div>
      </div>
      <div class="parallax__layer parallax__layer--base">
        <div class="title">This is the base</div>
      </div>
    </div>
  );
};
