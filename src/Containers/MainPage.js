import React, { useContext } from "react";
import { NavigationContext } from "../Contexts/NavigationContext";
import { GamePage } from "./GamePage";
import { CompanysPage } from "./CompanysPage";
import { Navbar } from "../Components/Navbar";

export const MainPage = () => {
  const [whichPage, setWhichPage] = useContext(NavigationContext);
  const choices = ["GamePage", "CompanyPage"];

  return (
    <>
      <Navbar choices={choices} onClick={setWhichPage} />
      {whichPage === "GamePage" ? <GamePage /> : null}
      {whichPage === "CompanyPage" ? <CompanysPage /> : null}
    </>
  );
};
