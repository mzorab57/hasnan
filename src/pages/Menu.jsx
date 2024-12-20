import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import MenuItem from "../component/MenuItem";
import CategoryFilter from "../component/CategoryFilter ";
import haschp from "/assets/images/bghero (1).png";
import haschp2 from "/assets/images/bghero (6).png";
import haschp3 from "/assets/images/bghero (7).png";
import haschp4 from "/assets/images/bghero (8).png";
import haschp5 from "/assets/images/bghero (9).png";
import haschp7 from "/assets/images/bghero (11).png";
import haschp6 from "/assets/images/chp.png";
import coat from "/assets/images/coat.png";
import coat1 from "/assets/images/coat1.png";
import coat2 from "/assets/images/coat2.png";
import coat3 from "/assets/images/coat3.png";
import cook from "/assets/images/bghero (5).png";
import pan from "/assets/images/pan.png";
import pan1 from "/assets/images/pan1.png";
import pan2 from "/assets/images/pan2.png";
import speard from "/assets/images/speard.webp";
import Designer from "/assets/images/Designer1.png";


const Menu = () => {
  const { t } = useTranslation(); // Destructure the translation function
  const [activeCategory, setActiveCategory] = useState(t("all"));
  const [activeSubcategory, setActiveSubcategory] = useState(t("all_coffee"));
  const location = useLocation();
  const path = location.pathname;

  const allMenuItems = [
    {
      imgSrc: pan2,
      altText: "ice1 cold drink",
      title: t("pancake"),
      description: "* * * * *",
      category: t("pancake"),
    },
    {
      imgSrc: coat2,
      altText: "coated",
      title: t("coated"),
      description: "* * * * *",
      category: t("coated"),
    },
    {
      imgSrc: haschp,
      altText: t("chips"),
      title: t("chips"), // Use translated title
      description: "* * * * *", // Translate description
      category: t("chips"),
    },
   
    {
      imgSrc: haschp2,
      altText: t("chips"),
      title: t("chips"), // Use translated title
      description: "* * * * *", // Translate description
      category: t("chips"),
    },
    
    {
      imgSrc: coat,
      altText: "coated",
      title: t("coated"),
      description: "* * * * *",
      category: t("coated"),
    },
    {
      imgSrc: coat3,
      altText: "coated",
      title: t("coated"),
      description: "* * * * *",
      category: t("coated"),
    },
    {
      imgSrc: haschp6,
      altText: t("chips"),
      title: t("chips"), // Use translated title
      description: "* * * * *", // Translate description
      category: t("chips"),
    },
   
  
    {
      imgSrc: cook,
      altText: "cake2",
      title: t("cookies"),
      description: "* * * * *",
      category: t("cookies"),
    },
    {
      imgSrc: coat1,
      altText: "Milk Coffee",
      title: t("coated"),
      description: "*****",
      category: t("coated"),
    },
  
    {
      imgSrc: haschp4,
      altText: t("chips"),
      title: t("chips"), // Use translated title
      description: "* * * * *", // Translate description
      category: t("chips"),
    },
    {
      imgSrc: haschp7,
      altText: t("chips"),
      title: t("chips"), // Use translated title
      description: "* * * * *", // Translate description
      category: t("chips"),
    },
    {
      imgSrc: pan,
      altText: "ice1 cold drink",
      title: t("pancake"),
      description: "* * * * *",
      category: t("pancake"),
    },
    
   
    {
      imgSrc: speard,
      altText: "spread",
      title: t("spread"),
      description: "* * * * *",
      category: t("spread"),
    },
    {
      imgSrc: pan1,
      altText: "ice1 cold drink",
      title: t("pancake"),
      description: "* * * * *",
      category: t("pancake"),
    },
    {
      imgSrc: haschp3,
      altText: t("chips"),
      title: t("chips"), // Use translated title
      description: "* * * * *", // Translate description
      category: t("chips"),
    },
    {
      imgSrc: haschp5,
      altText: t("chips"),
      title: t("chips"), // Use translated title
      description: "* * * * *", // Translate description
      category: t("chips"),
    },
   
  ];

  const allCategories = [
    t("all"),
    t("chips"),
    t("coated"),
    t("cookies"),
    t("pancake"),
    t("spread"),
  ];

  const filteredMenuItems = allMenuItems.filter((item) => {
    //mn by default all danawa bo pshan dan ballam la section saraki categoriakanm la brdwa, bo ya abe aw condition dwam ziakam ta filterr menu kam bka u basheki pshan bat
    if (activeCategory === t("all")) return true;
    return item.category === activeCategory;
  });

  useEffect(() => {
    // Reset subcategory when the main category changes
    if (activeCategory === t("chips")) {
      setActiveSubcategory(t("all_coffee"));
    } else if (activeCategory === t("cold_drink")) {
      setActiveSubcategory(t("all_drink"));
    }
  }, [activeCategory, t]);

  return (
    <section
      className="section  bg-cover   bg-center w-full min-h-screen py-5"
      // style={path === "/" ? { backgroundImage: `url(${category_bg})` } : {}}
    >
      <div className="container mx-auto p-5  max-w-[1100px]">
        {/* Text Section */}
        <div className="text-center my-12">
          <div className="text-primary uppercase">{t("choose_best_snack")}</div>
          <h3 className="md:text-4xl lg:text-5xl text-2xl  font-courgette text-black my-4">
            {t("hasnan_category")}
          </h3>
        </div>

        {/* Category Filter */}
        {path !== "/" && (
          <>
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              categories={allCategories}
            />
          </>
        )}

        {/* Menu Items */}
        <div
          className=" border mt-5 border-double border-primary max-w-[1000px] flex justify-center items-center rounded-2xl relative px-5 py-10"
          // style={path === "/" ? { backgroundImage: `url(${menu_logo})`}: {}}
        >
          {path === "/menu" ? (
            ""
          ) : (
            <>
              <img src={Designer} alt="j" className="  top-10   absolute" />
              <img
                src={Designer}
                alt="j"
                className="  bottom-20     absolute"
              />
            </>
          )}

          {/* <img src={bgtaza} alt="j" className="w-96 top-10 opacity-50  absolute" /> */}

          <div className="grid  grid-cols-1 lg:grid-cols-2 lg:gap-x-44 gap-x-10  gap-y-14">
            {path === "/" ? (
              allMenuItems
                .slice(0, 6)
                .map((item, index) => (
                  <MenuItem
                    key={index}
                    imgSrc={item.imgSrc}
                    altText={item.altText}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                ))
            ) : filteredMenuItems.length === 0 ? (
              <p className="text-black">{t("please_choose_your_category")}</p>
            ) : (
              filteredMenuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  imgSrc={item.imgSrc}
                  altText={item.altText}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
