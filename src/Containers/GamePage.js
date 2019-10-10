import React, { useContext, useCallback, useEffect, useRef } from "react";
import "../Styles/GameStyle.scss";
import { NavigationContext } from "../Contexts/NavigationContext";
import { CompanysPage } from "./CompanysPage";

export const GamePage = () => {
  console.log("GamePage was called");
  const [nav, setNav] = useContext(NavigationContext);
  const handleScroll = event => {
    if (event.target.scrollTop > 150 && nav.smallNavbar === false) {
      setNav((prevNav, props) => {
        return { ...prevNav, smallNavbar: true };
      });
    } else if (event.target.scrollTop <= 150 && nav.smallNavbar === true) {
      setNav((prevNav, props) => {
        return { ...prevNav, smallNavbar: false };
      });
    }
  };
  return (
    <div className="parallax" onScroll={handleScroll}>
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
