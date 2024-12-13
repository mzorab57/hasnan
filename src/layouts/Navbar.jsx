import React, { useState } from "react";
import { scroller } from "react-scroll";
import artukbey_logo from "/assets/images/logo (1).png";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import LanguageSwitcher from "../component/LanguageSwitcher";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const Navbar = ({setMenuOpen }) => {
  const { t } = useTranslation(); // Destructure the translation function
  const [color, setColor] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: section === "hero" ? -200 : 40,
      duration: 500,
    });
  };

  return (
    <div
    dir="ltr"
      className={`kf-navbar text-black  flex place-self-center w-full justify-between lg:flex-col`}
    >
      {color ? <div className="h-20 bg-white"></div> : null}

      {/* Main Navbar */}
      <div
        className={`flex justify-between text-2xl font-semibold items-center py-4 h-20 bg-white w-full px-6 lg:px-10 ${
          color && "fixed top-0 py-4 ease-in transition-all z-30 bg-white"
        }`}
      >
        {/* Logo */}
        <div className="flex font-courgette justify-center   items-center">
          <Link to="/">
            <img src={artukbey_logo} alt="artkbey Logo" className=" h-56 px-2" />
          </Link>
          
        </div>

        {/* Navigation Menu - Hidden on Mobile */}
        <ul className={`hidden lg:flex space-x-8  mr-40  justify-center items-center rtl:space-x-8 font-courgette`}>
          <li onMouseMove={() => setMenuOpen(false)}>
            <Link
              to="/"
              onClick={() => scrollToSection("hero")}
              className="hover:text-primary cursor-pointer px-6"
            >
              {t("home")}
            </Link>
          </li>

          <li onMouseMove={() => setMenuOpen(false)}>
            <Link
              to="/"
              onClick={() => scrollToSection("about")}
              className="hover:text-primary cursor-pointer"
            >
              {t("about")}
            </Link>
          </li>

          {/* Menu */}
          <li onMouseMove={() => setMenuOpen(false)} className="group relative">
            <Link onClick={()=> { window.scrollTo({ top: 0, behavior: 'smooth' })}} to="/menu" className="hover:text-primary">
              {t("category")}
              <i className="las la-angle-down ml-1"></i>
            </Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link onClick={()=> { window.scrollTo({ top: 0, behavior: 'smooth' })}} to="/services" className="hover:text-primary">
              {t("services")}
            </Link>
          </li>

          {/* Contacts */}
          <li onMouseMove={() => setMenuOpen(false)}>
            <Link
              to="/"
              onClick={() => scrollToSection("contacts")}
              className="hover:text-primary cursor-pointer"
            >
              {t("contacts")}
            </Link>
          </li>
        </ul>

        <LanguageSwitcher />
      </div>
      {/* Mobile Menu */}
      <MobileMenu setOpenMenu={setOpenMenu} isOpenMenu={isOpenMenu} />
    </div>
  );
};

export default Navbar;
