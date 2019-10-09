import React, { useContext, useState } from "react";

export const NavigationContext = React.createContext();

export const NavigationProvider = props => {
  const navHook = useState("Game");
  return (
    <NavigationContext.Provider value={navHook}>
      {props.children}
    </NavigationContext.Provider>
  );
};
