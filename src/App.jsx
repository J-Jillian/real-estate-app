import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Puedes agregar más rutas aquí */}
        {/* <Route path="/properties" element={<Properties />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
