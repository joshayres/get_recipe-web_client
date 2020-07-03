import React from "react";
import Recipe from "./components/Recipe";
import Search from "./components/Search";
import Next from "./components/Next";
import { AppWrap } from "./appStyles";

function App() {
  return (
    <AppWrap>
      <Search />
      <Recipe />
      <Next />
    </AppWrap>
  );
}

export default App;
