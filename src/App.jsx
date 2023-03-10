import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css";
import Ticket from "./pages/Ticket";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Background from "./components/Background";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Background />
    </div>
  );
};

export default App;
