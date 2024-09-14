import React from "react";
import Dispatch from "./app/Dispatch";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
const App = () => {
  return (
    <Dispatch>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Dispatch>
  );
};

export default App;
