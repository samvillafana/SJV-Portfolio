import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components";
import { About, Contact, Portfolio, Resume } from "../pages";

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default MainNavigation;
