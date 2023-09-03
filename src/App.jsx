import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "../src/components/style.css";
import Home from "./components/Home";
import ACart from "./components/ACart";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/cart" element={<ACart/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;