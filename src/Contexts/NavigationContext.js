import React, { useContext, useState } from "react";

export const NavigationContext = React.createContext();

export const NavigationProvider = props => {
  const navHook = useState("GamePage");
  return (
    <NavigationContext.Provider value={navHook}>
      {props.children}
    </NavigationContext.Provider>
  );
};
