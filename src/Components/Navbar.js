import React, { useContext } from "react";
import { NavigationContext } from "../Contexts/NavigationContext";

export const Navbar = props => {
  const choices = props.choices;

  return (
    <>
      {choices.map(choice => {
        return (
          <button key={choice} onClick={() => props.onClick(choice)}>
            {choice}
          </button>
        );
      })}
    </>
  );
};
