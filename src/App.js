import "./App.css";
import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Services from "./component/Services";
import Navbar from "./component/Navbar";
import Fotter from "./component/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";

function App() {
 
  return (
   
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
      <Fotter/>
    </>
  );
}

export default App;
