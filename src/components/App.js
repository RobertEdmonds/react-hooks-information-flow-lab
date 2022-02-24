import React, { useState } from "react";
import ShoppingList from "/Users/robertedmonds/Development/code/Mod2/State/react-hooks-information-flow-lab/src/components/ShoppingList.js";
import itemData from "../data/items";
import Header from "/Users/robertedmonds/Development/code/Mod2/State/react-hooks-information-flow-lab/src/components/Header.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // function handleDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }
  function onDarkModeClick(){
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
