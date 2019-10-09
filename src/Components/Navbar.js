import React, { useContext } from "react";
import { NavigationContext } from "../Contexts/NavigationContext";
import "../Styles/NavStyle.scss";
export const Navbar = props => {
  const choices = props.choices;

  return (
    <div className="NavBar">
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
