import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import haschp from "/assets/images/bghero (1).png";
import coat1 from "/assets/images/bghero (6).png";
import cook from "/assets/images/coat1.png";
import pan from "/assets/images/bghero (5).png";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState(false);
  const [paddingTop, setPaddingTop] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const isRTL = i18n.language === "ar" || i18n.language === "ku";

  const changeHeaderColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
      setPaddingTop("pt-[calc(1.5rem+1px)]");
    } else {
      setPaddingTop("pt-[calc(0rem+0px)]");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const images = [coat1, cook, haschp,pan ];
  const imageDescriptions = t("swiper_images", { returnObjects: true });

  return (
    <section
      name="hero"
      className="has-section bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-500 to-yellow-200 w-full h-screen lg:flex-row flex flex-col items-center justify-center relative"
    >
      {/* Text Section */}
      <div className="max-w-4xl w-full mx-20 mt-28 lg:mt-0 text-5xl text-white px-4">
        <div className="text-sm leading-10">
          <span className="font-semibold font-courgette lg:text-6xl md:text-5xl text-4xl">
          <span className="text-green-600">  {t("welcome")}</span>
            {t("hero_title")}
          <span className="text-red-400"> {t("products")}</span>
          </span>
          <br />
          <p className="lg:max-w-xl max-w-sm lg:text-lg text-base pt-2 text-white">
            {t("hero_subtitle")}
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        key={i18n.language}
        className={`swiper-container place-self-center lg:w-1/2 w-full transition-all h-full lg:h-[820px] duration-200 ease-in-out ${
          color
            ? `${paddingTop} transition-all duration-1000`
            : "transition-all duration-1000"
        }`}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide w-full mt-10">
            <img
              src={image}
              alt={imageDescriptions[index]}
              className="  px-3"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SVG Wave */}
      <svg
        className="absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 840 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,154.7C672,149,768,171,864,176C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
