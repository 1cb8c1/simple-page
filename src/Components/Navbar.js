import React, { useEffect, useState } from "react";
import "../Styles/NavStyle.scss";
export const Navbar = props => {
  const choices = props.choices;
  const [height, setHeight] = useState(props.height);

  useEffect(() => {
    window.addEventListener("scroll", manageScroll);
    return () => window.removeEventListener("scroll", manageScroll);
  }, [height]);

  const manageScroll = () => {
    if (document.documentElement.scrollTop / 2 > height) {
      if (height !== props.smallHeight) {
        setHeight(props.smallHeight);
      }
    } else if (height !== props.height) {
      setHeight(props.height);
    }
  };

  return (
    <div className="NavBar" style={{ height: height + "px" }}>
      {choices.map(choice => {
        return (
          <button key={choice} onClick={() => props.onClick(choice)}>
            {choice}
          </button>
        );
      })}
    </div>
  );
};
