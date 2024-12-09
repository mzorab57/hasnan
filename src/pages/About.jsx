import React from "react";
import chpIcon1 from "/assets/images/chIcon.png";
import chpIcon2 from "/assets/images/chpIcon2.png";
import chpIcon3 from "/assets/images/chpIcon3.png";

import { useTranslation } from "react-i18next"; // Import useTranslation hook

const About = () => {
  const { t } = useTranslation(); // Destructure the translation function

  return (
    <section
      name="about"
      className="relative    py-12 h-[500px] "
     
    >
      {/* Icon at Top-Right */}
      <img
        src={chpIcon1}
        alt="Top Right Icon"
        className="absolute -top-14 size-48 right-24  lg:size-60 opacity-80 "
      />
      {/* Icon at Top-Right */}
      <img
        src={chpIcon3}
        alt="Top Right Icon"
        className="absolute size-56 lg:-bottom-14 bottom-0 left-0  right-24  lg:size-60 opacity-80 "
      />

      {/* Icon at Bottom-Left */}
      <img
        src={chpIcon2}
        alt="Bottom Left Icon"
        className="lg:flex absolute  hidden top-0 left-24 w-56 opacity-80 "
      />
      {/* Icon at Bottom-Left */}
      {/* <img
        src={chpIcon2}
        alt="Bottom Left Icon"
        className="absolute top-0 size-40 left-24  lg:w-44 opacity-80 "
      /> */}

      <div className="container w-full m-auto px-4 flex flex-col justify-center items-center h-full">
        {/* Text Section */}
        <div className="text-center text-white ">
          <div className="hasnan-titles mb-6">
            {/* Subtitle */}
            <div className="text-primary uppercase mb-2 text-lg  font-courgette">
              {t("about_us")}
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-4xl font-bold mb-4 text-black font-courgette">
              {t("about_title")}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 text-sm lg:text-lg max-w-3xl mx-auto font-semibold">
              {t("about_description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
