import React from "react";
import App from "./App";
import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return(
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/app" element={<App />} />
    </Routes>
  );
}

export default Routing;