// src/App.jsx
import React from "react";
import Dispatch from "./app/dispatch";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Dispatch>
      <HomePage />
    </Dispatch>
  );
};

export default App;
