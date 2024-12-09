import React, { useState } from "react";
import servicesimg from "/assets/images/serv-img.jpg";
import Services from "../pages/Services";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const [color, setColor] = useState(false);
  const [p, setP] = useState("");

  const changeHeaderColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
      setP("pt-[calc(1.5rem+1px)]");
    } else {
      setP("pt-[calc(0rem+0px)]");
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <section
    className={`text-white ${
      color
        ? `${p} transition-all duration-1000 ease-in-out`
        : "transition-all duration-1000 ease-in-out"
    }`}
  >
    {/* Hero Section */}
    <div
      style={{ backgroundImage: `url(${servicesimg})` }}
      className="relative w-full h-screen bg-black bg-cover flex items-center justify-start"
    >
      {/* Brightness Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
  
      {/* Text Content */}
      <div className="relative z-20 text-white md:text-center   w-full p-4 pt-16">
        <h1 className="md:text-7xl text-4xl font-courgette  bg-black/50">
          {t("what_we_do")}
        </h1>
      </div>
    </div>
  
    <Services />
  </section>
  
  );
};

export default ServicesSection;
