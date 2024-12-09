import React from 'react'

const CategoryButton  = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`md:px-6 px-4 mx-2 md:py-3 py-1 rounded-full border border-primary font-courgette transition-colors duration-300 ${
        isActive ? 'bg-primary text-black' : 'bg-primary/50 text-black'
      } hover:bg-primary hover:text-white`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default CategoryButton 
