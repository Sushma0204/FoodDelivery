import React from 'react'
import {mainItems} from '../assets/assets.js'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col mt-16'>
      <div className='text-center'>
        <h2 className='text-amber-600 font-bold text-3xl'>Explore our menu</h2>
        <p className='text-gray-600 mt-2'>
          Indulge in an exquisite fusion of gourmet flavors, masterfully crafted to satisfy every culinary desire.
        </p>
      </div>

      <div className='flex justify-center items-center gap-10 mt-5 mb-10 text-center flex-wrap'>
        {mainItems.map((item) => (
          <div
            onClick={() => setCategory(prev => prev === item.name ? 'All' : item.name)}
            className='transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer'
            key={item.id}
          >
            <img
              className={`w-22 h-22 rounded-full border-4 ${
                category === item.name ? 'p-1 border-amber-600' : 'border-transparent'
              }`}
              src={item.image}
              alt={item.name}
            />
            <p className='text-sm mt-2'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMenu
