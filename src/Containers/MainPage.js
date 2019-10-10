import React, { useContext } from "react";
import { NavigationContext } from "../Contexts/NavigationContext";
import { GamePage } from "./GamePage";
import { CompanysPage } from "./CompanysPage";
import { Navbar } from "../Components/Navbar";
import "../Styles/MainStyle.scss";

export const MainPage = () => {
  console.log("MainPage was called");
  const [nav, setNav] = useContext(NavigationContext);
  const choices = ["Game", "Company"];

  const handleClick = choice => {
    setNav((prevState, props) => {
      return { ...prevState, menu: choice };
    });
  };

  return (
    <div className="MainPage">
      <Navbar
        smallHeight={40}
        height={75}
        choices={choices}
        onClick={handleClick}
        small={nav.smallNavbar}
      />
      {nav.menu === "Game" ? <GamePage /> : null}
      {nav.menu === "Company" ? <CompanysPage /> : null}
    </div>
  );
};
