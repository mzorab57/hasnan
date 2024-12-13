import React from "react";
import logo from "/assets/images/logo (1).png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer name="contacts" className=" text-black  py-12   ">
      <div className="container mx-auto px-4 max-w-[1400px] ">
        <div className="flex flex-col md:flex-row justify-between  border-t pt-10 border-gray-700 items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Logo Section */}
          <div className="md:w-1/4">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col space-y-5">
              
                <img src={logo} alt="logo" className="" />
              </div>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="md:w-1/4  w-full  text-center">
            <h5 className="text-xl font-courgette mb-4">{t("working_hours")}</h5>
            <ul>
              <li className="mb-2">
                <span className="block">{t("sunday_thursday")}</span>
                <span className="text-gray-400">08:00 am - 04:00 pm</span>
              </li>
              <li className="mb-2">
                <span className="block">{t("only_friday")}</span>
                <span className="text-gray-400">off</span>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:w-1/4 w-full  text-center">
            <h5 className="text-xl font-courgette mb-4">{t("contact_us")}</h5>
            <ul className="w-full flex flex-col justify-center items-center  text-center">
              <li className=" mb-2">
                
                <span>{t("location")}<span>{t("addres")}</span></span> 
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <span> {t("email")}</span>
              </li>
              <li className="flex flex-col items-start px-2">
              <span> {t("phone")} <span className="text-black">{t("number1")}</span></span>
              <span> {t("phone")} <span className="text-black">{t("number2")}</span></span>
           
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          &copy; TOP SOFT. {t("all_rights_reserved")}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
