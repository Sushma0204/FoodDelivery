import React from 'react'
import { mainItems } from '../assets/assets.js'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col mt-10 sm:mt-14 md:mt-20 px-3 sm:px-6 md:px-10 lg:px-20'>
      <div className='text-center'>
        <h2 className='text-amber-600 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          Explore our menu
        </h2>
        <p className='text-gray-600 mt-2 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto'>
          Indulge in an exquisite fusion of gourmet flavors, masterfully crafted to satisfy every culinary desire.
        </p>
      </div>

      <div className='flex justify-center items-center gap-4 sm:gap-6 lg:gap-3 mt-6 sm:mt-8 md:mt-10 mb-10 text-center flex-wrap'>
        {mainItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setCategory(prev => prev === item.name ? 'All' : item.name)}
            className='transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-16 sm:w-20 md:w-24 lg:w-28'
          >
            <img
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 mx-auto ${
                category === item.name ? 'p-1 border-amber-600' : 'border-transparent'
              }`}
              src={item.image}
              alt={item.name}
            />
            <p className='text-[10px] sm:text-xs md:text-sm lg:text-base mt-2 truncate'>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMenu
