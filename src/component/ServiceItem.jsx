import React from "react";


const ServiceItem = ({ imgSrc, altText, title, onClick }) => {

  return (
    <div className="w-full  px-4 my-8" onClick={onClick}>
      <div className="relative group cursor-pointer">
      
     
<div className="flex justify-center items-center">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-500 to-yellow-200  w-72 h-56  rounded-3xl relative ">
            <div className="text-white text-4xl  absolute bottom-0 left-1/3 z-10 font-courgette">
            <h5 className="text-black text-xl px-3 pt-0.5 rounded-tr-2xl rounded-tl-2xl bg-white w-24 text-center h-10">{title}</h5>
            </div>
          </div>
     

        <div className="overflow-hidden rounded-lg absolute  lg:-top-48 -top-32">
          <img
            src={imgSrc}
            alt={altText}
            className={`${altText === "coat" ? "lg:h-[350px]  w-40 lg:mt-5":""} lg:h-96 h-72 w-60 lg:w-96 transition-transform transform  group-hover:scale-105 duration-700`}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
