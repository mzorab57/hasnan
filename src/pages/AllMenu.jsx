import React, { useState } from "react";
import Menu from "./Menu";
import menuBg from "/assets/images/menu-bg.jpg";
import { useTranslation } from "react-i18next"; // Import translation

const AllMenu = ({ setMenuOpen }) => {
  const [color, setColor] = useState(false);
  const [p, setP] = useState("");
  const { t } = useTranslation(); // Initialize translation

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
      onMouseOut={() => setMenuOpen(false)}
      className={`text-white ${
        color
          ? `${p} transition-all duration-1000 ease-in-out`
          : " transition-all duration-1000 ease-in-out"
      }`}
    >
      {/* menu Section */}
      <div
        className={`relative w-full bg-black h-screen flex items-center justify-start`}
      >
        <img
          src={menuBg}
          alt="menu"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-white md:text-start  max-w-[700px] p-4 mb-44  md:p-10">
          <h1 className="md:text-7xl text-4xl font-semibold  font-courgette">
           {t("our_category")}
          </h1>
          <h4 className="md:text-3xl text-xl font-light pt-5">
            {t("we_are")}
          </h4>
        </div>
      </div>

      <Menu />
    </section>
  );
};

export default AllMenu;
