import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/t&C" element={<Contact/>} />
        <Route exact path="/privacy" element={<Privacy/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
