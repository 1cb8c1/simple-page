import React from "react";
import "../Styles/GameStyle.scss";

export const GamePage = () => {
  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer--background"></div>
      <div className="parallax__layer parallax__layer--background2"></div>
      <div className="parallax__layer parallax__layer--layer1">
        <div className="quoteFrame"></div>
      </div>
      <div className="parallax__layer parallax__layer--base flex-container">
        <div className="quote">
          And he shall rule them with a rod of iron, and as the vessels of a
          potter, shall they be broken
        </div>
      </div>
    </div>
  );
};

/*              And he shall rule them with a rod of iron, and as the vessels of a
              potter, shall they be broken*/
