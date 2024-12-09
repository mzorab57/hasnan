import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import ServiceItem from "../component/ServiceItem";

import { PiCoffee } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { LuCakeSlice } from "react-icons/lu";
import haschp from "/assets/images/bghero (5).png";
import coat from "/assets/images/coat.png";
import cook from "/assets/images/bghero (1).png";

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate hook to programmatically navigate
  const path = location.pathname;
  const { t } = useTranslation(); // Destructure the translation function

  const handleServiceClick = () => {
    window.scrollTo({ top: 0 });
    navigate(`/menu`);
  };

  return (
    <section
      className={`services py-12 ${
        path === "/" ? "" : "py-12 "
      }`}
    >
      <div className="container mx-auto px-4 max-w-[1300px]">
        {path !== "/" && (
          <div className="block  text-center my-40">
            <span className="text-primary text-xl">{t("we_provide")}</span>
            <h1 className="font-semibold text-black font-courgette md:text-4xl lg:md:text-5xl  text-2xl py-5">
            {t("hasnan_company_service")}
            </h1>
            <h3 className="font-light text-gray-500  md:text-xl text-lg py-5">
            {t("we_alsow")}
            </h3>
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-y-32 w-full  -mx-4">
          
        <ServiceItem
            imgSrc={cook}
            altText="Cake Menu"
            icon={
              <LuCakeSlice className="text-orange-100 text-opacity-80 group-hover:text-opacity-100 group-hover:text-orange-200" />
            }
            title="Chips" // Translated title
            onClick={() => handleServiceClick("cakes")}
          />

          <ServiceItem
            imgSrc={haschp}
            altText="Chips Menu"
            icon={
              <PiCoffee className="text-orange-100 text-opacity-60 group-hover:text-opacity-100 group-hover:text-orange-200" />
            }
            title="Cookies" // Translated title
            onClick={() => handleServiceClick("hot-drinks")} // Navigate to Menu component with category
          />
     
               <ServiceItem
            imgSrc={coat}
            altText="coat"
            icon={
              <BiDrink className="text-orange-100 text-opacity-60 group-hover:text-opacity-100 group-hover:text-orange-200" />
            }
            title="Coated" // Translated title
            onClick={() => handleServiceClick("cold-drinks")}
          />
       
         
        </div>
      </div>
    </section>
  );
};

export default Services;
