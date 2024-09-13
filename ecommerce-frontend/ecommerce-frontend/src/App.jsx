import React from "react";
import Dispatch from "./app/dispatch";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Dispatch>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
    </Dispatch>
  );
};

export default App;
