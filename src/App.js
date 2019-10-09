import React from "react";
import { MainPage } from "./Containers/MainPage";
import { NavigationProvider } from "./Contexts/NavigationContext";

function App() {
  return (
    <div className="App">
      <NavigationProvider>
        <MainPage />
      </NavigationProvider>
    </div>
  );
}

export default App;
