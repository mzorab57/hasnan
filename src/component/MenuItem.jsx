import React from 'react'

const MenuItem = ({ imgSrc, altText, title, description, price }) => {
  return (
    <div className="flex  w-full justify-between gap-10 items-center">
      {/* Image Section */}
      <div className="size-fit md:w-40 md:h-36 overflow-hidden rounded-lg">
       
          <img
            src={imgSrc}
            alt={altText}
            loading="lazy"
            className="size-44 lg:size-fit object-cover transition-transform transform hover:scale-110 duration-700"
          />
       
      </div>

      {/* Text Section */}
      <div className="flex-1 ">
        {/* Ensure the title text wraps */}
        <h5 className="text-xl  font-courgette text-black">{title}</h5>

        {/* Allow description to wrap naturally */}
        <div className="text-primary/80 py-4 text-sm">{description}</div>

        {/* Price styling */}
        <div className=" font-bold mt-2">{price}</div>
      </div>
    </div>
  )
}

export default MenuItem;
