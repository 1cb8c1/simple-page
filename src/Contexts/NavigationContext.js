import React, { useContext, useState } from "react";

export const NavigationContext = React.createContext();

export const NavigationProvider = props => {
  console.debug("NavigationProvider was called");
  const navHook = useState({
    menu: "Game",
    smallNavbar: false
  });
  return (
    <NavigationContext.Provider value={navHook}>
      {props.children}
    </NavigationContext.Provider>
  );
};
