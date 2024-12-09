import React from "react";
import { Route, Routes } from "react-router-dom";

import Hero from "../pages/Hero";
import About from "../pages/About";
import Services from "../pages/Services";
import Menu from "../pages/Menu";
import Carousel from "../pages/Carousel";
import ServicesSection from "../pages/ServicesSection";
import AllMenu from "../pages/AllMenu";

const AppRoutes = ({ setMenuOpen }) => {
  return (
    // aw set show service bo awaia katek mouse lasar page lachu la har shwenek bet colse aw hover bkat
    <div onMouseOut={() => setMenuOpen(false)}>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Menu />
              <Carousel />
            </>
          }
        />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/menu" element={<AllMenu />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
