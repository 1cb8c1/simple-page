import React, { useContext } from "react";
import { NavigationContext } from "../Contexts/NavigationContext";
import { GamePage } from "./GamePage";
import { CompanysPage } from "./CompanysPage";
import { Navbar } from "../Components/Navbar";
import "../Styles/MainStyle.scss";

export const MainPage = () => {
  const [whichPage, setWhichPage] = useContext(NavigationContext);
  const choices = ["Game", "Company"];

  return (
    <div className="MainPage">
      <Navbar
        smallHeight={40}
        height={75}
        choices={choices}
        onClick={setWhichPage}
      />
      {whichPage === "Game" ? <GamePage /> : null}
      {whichPage === "Company" ? <CompanysPage /> : null}
    </div>
  );
};
