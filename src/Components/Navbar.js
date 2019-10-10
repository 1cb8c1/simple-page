import React, { useEffect, useState, useContext } from "react";
import "../Styles/NavStyle.scss";
import { NavigationContext } from "../Contexts/NavigationContext";

export const Navbar = props => {
  console.log("Navbar was called");
  const choices = props.choices;
  const [height, setHeight] = useState(props.height);

  useEffect(() => {
    if (props.small) {
      setHeight(props.height - 35);
    } else {
      setHeight(props.height);
    }
  }, [props.small]);

  return (
    <div
      className="NavBar"
      style={
        props.small
          ? {
              height: height + "px",
              borderBottomRightRadius: "50px",
              borderBottomLeftRadius: "50px",
              border: "1px #ffffffff solid",
              width: "50vw",
              marginLeft: "25vw",
              marginRight: "25vw"
            }
          : {
              height: height + "px"
            }
      }
    >
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
