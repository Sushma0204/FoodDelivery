import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import plus from '../assets/plus.png'
import plus_white from '../assets/plus_white.png'
import minus from '../assets/minus.png'

const FoodItems = ({ category }) => {
  const { foodItems, cartItem, addToCart, removeFromCart, url } = useContext(StoreContext)

  return (
    <div className='px-4 sm:px-6 md:px-10 lg:px-20 py-5'>
      <h2 className='text-amber-600 text-xl sm:text-2xl md:text-3xl font-bold mb:2 sm:mb-6 text-center md:text-left'>
        Top Food Items near you
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {foodItems
          .filter(item => category === 'All' || category === item.category)
          .map((item, idx) => {
            const itemId = String(item._id || `item-${idx}`)

            return (
              <div key={itemId} className='flex flex-col gap-3 rounded-xl p-3 shadow-md shadow-gray-300 bg-white'>
                <div className='relative'>
                  <img
                    src={url + "/images/" + item.image}
                    alt={item.name}
                    className='w-full h-40 sm:h-48 md:h-56 lg:h-60 rounded-xl object-cover'
                  />
                  {!cartItem[itemId] ? (
                    <img
                      className='w-7 h-7 sm:w-8 sm:h-8 absolute bottom-3 right-3 cursor-pointer'
                      onClick={() => addToCart(itemId)}
                      src={plus_white}
                      alt='Add Icon'
                    />
                  ) : (
                    <div className='flex items-center gap-1 absolute bottom-3 right-3 bg-white p-1 sm:p-2 rounded-3xl'>
                      <img
                        className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer'
                        onClick={() => removeFromCart(itemId)}
                        src={minus}
                        alt='Minus Icon'
                      />
                      <p className='text-xs sm:text-sm'>{cartItem[itemId]}</p>
                      <img
                        className='w-7 h-7 sm:w-8 sm:h-8 cursor-pointer'
                        onClick={() => addToCart(itemId)}
                        src={plus}
                        alt='Plus Icon'
                      />
                    </div>
                  )}
                </div>

                <p className='font-semibold text-sm sm:text-base'>{item.name}</p>
                <p className='text-xs sm:text-sm text-gray-600'>{item.description}</p>
                <p className='text-amber-700 font-bold mt-auto text-sm sm:text-base'>₹{item.price}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FoodItems
