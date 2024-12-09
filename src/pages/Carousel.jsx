import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import carousel2 from "/assets/images/bghero (1).png";
import carousel4 from "/assets/images/coat1.png";
import carousel5 from "/assets/images/bghero (5).png";
import carousel6 from "/assets/images/pan.png";
import carobg from "/assets/images/bgcaro.jpg";

const Carousel = () => {
  const { t } = useTranslation(); // Destructure the translation function
  return (
    <section
      className="section object-cover relative kf-grid-carousel flex items-center w-full py-[220px] px-5  bg-white bg-center bg-cover"
      // style={{ backgroundImage: `url(${carobg})` }} // Set the background image
    >
      <span className="text-primary text-xl font-courgette z-10 absolute top-10 left-[33%] md:left-[43%]">
       { t("we_provide") }
      </span>
      <span className="text-black lg:text-5xl text-3xl font-courgette z-10 absolute top-20  left-[30%] md:left-[40%]">
        {t("product")}
      </span>
      {/* Add an optional overlay if needed */}
      <div className="absolute inset-0 "></div>

      <div className="container mx-auto relative z-10">
        <Swiper
        dir="ltr"
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
          className="flex flex-col justify-center items-center  "
        >
          {[
            carousel2,
            carousel4,
            carousel5,
            carousel6,
            carousel2,
            carousel4,
            carousel5,
            carousel6,
          ].map((image, index) => (
            <SwiperSlide className="swiper-slide py-14" key={index}>
              <div className="relative slide-item border border-primary rounded-xl overflow-hidden">
                <div className="image kf-image-hover w-fit h-60 lg:h-72 overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="size-full object-cover group-hover:scale-105 duration-700 "
                  />

                  {/* Text Overlay */}
                  <div className="absolute p-7 inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 opacity-100 transition-opacity duration-500">
                    <div className="border duration-1000 ease-out border-orange-100 border-opacity-0 group-hover:border-opacity-100 group-hover:border-orange-200 w-full h-full flex flex-col justify-center items-center rounded"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
