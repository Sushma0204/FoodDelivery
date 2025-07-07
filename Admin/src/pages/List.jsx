import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import trash from '../assets/trash.png'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])
  const url = 'http://localhost:4000'

  const categoryColors = {
    Beverages: 'bg-blue-100 text-blue-800 border-blue-200',
    Biriyani: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Bakery: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Fast Food': 'bg-red-100 text-red-800 border-red-200',
    Starters: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    Salads: 'bg-lime-100 text-lime-800 border-lime-200',
    'North Indian': 'bg-orange-100 text-orange-800 border-orange-200',
    'South Indian': 'bg-pink-100 text-pink-800 border-pink-200',
    Noodles: 'bg-purple-100 text-purple-800 border-purple-200',
    Desserts: 'bg-rose-100 text-rose-800 border-rose-200',
    'Non Veg': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
  }

  const removeFood = async (foodId) => {
    try {
      const res = await axios.post(`${url}/api/food/remove`, { id: foodId })
      if (res.data.success) {
        toast.success(res.data.message)
        await getList()
      } else {
        toast.error(res.data.message || 'Error removing item')
      }
    } catch (error) {
      toast.error('Server error while removing item')
      console.error(error)
    }
  }

  const getList = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`)
      if (res.data.success) {
        setList(res.data.data)
      } else {
        toast.error('Failed to fetch food list')
      }
    } catch (err) {
      toast.error('Server error')
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="w-full p-5">

      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-3xl font-bold text-amber-600 text-center">All Food Items</h2>
        <p className="text-gray-600 text-sm sm:text-base text-center mt-2">Manage your restaurant menu items</p>
      </div>

      {list.length === 0 ? (
        <div className="text-center py-12 sm:py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-md mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl text-gray-500 font-medium">No items found</p>
            <p className="text-sm text-gray-400 mt-2">Start by adding your first menu item</p>
          </div>
        </div>
      ) : (
        <>

          <div className="mb-6 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
              {list.length} {list.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {list.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >


                <div className="relative overflow-hidden">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />


                  <button
                    onClick={() => removeFood(item._id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 hover:bg-red-500 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group/delete"
                  >
                    <img
                      className="w-4 h-4 group-hover/delete:filter group-hover/delete:brightness-0 group-hover/delete:invert transition-all"
                      src={trash}
                      alt="Delete"
                    />
                  </button>
                </div>


                <div className="p-4 sm:p-5">

                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 line-clamp-2">
                    {item.name}
                  </h3>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium border ${categoryColors[item.category] || 'bg-gray-100 text-gray-800 border-gray-200'
                        }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default List