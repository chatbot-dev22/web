import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo"; // Add other pages as needed
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import More from "./pages/More";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="page-container">
              <Home />
              <div className="section-separator"></div>
              
            </div>
          }
        />

       
        <Route path="/about" element={<About />} />

       
        <Route path="/what-we-do" element={<WhatWeDo />} />

       
        <Route path="/careers" element={<Careers />} />

        
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/more" element={<More />} />
      </Routes>
      </>
   
  );
}

export default App;