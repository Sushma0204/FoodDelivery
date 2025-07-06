import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import trash from '../assets/trash.png'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])
  const url = 'https://fooddelivery-backend-vepa.onrender.com'

  const categoryColors = {
    Beverages: 'bg-blue-200 text-blue-800',
    Biriyani: 'bg-yellow-200 text-yellow-800',
    Bakery: 'bg-cyan-200 text-cyan-800',
    'Fast Food': 'bg-red-200 text-red-800',
    Starters: 'bg-indigo-200 text-indigo-800',
    Salads: 'bg-lime-200 text-lime-800',
    'North Indian': 'bg-orange-200 text-orange-800',
    'South Indian': 'bg-pink-200 text-pink-800',
    Noodles: 'bg-purple-200 text-purple-800',
    Desserts: 'bg-rose-200 text-rose-800',
    'Non Veg': 'bg-fuchsia-200 text-fushcia-800',
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
    <div className="p-8 w-full min-h-screen">
      <h2 className="text-3xl font-bold text-amber-600 mb-8 text-center">All List Items</h2>

      {list.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">No items found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => removeFood(item._id)}
                  className="absolute top-3 right-3 bg-white hover:scale-110 cursor-pointer p-2 rounded-full transition-colors duration-200"
                >
                  <img className="w-4 h-4" src={trash} alt="Delete" />
                </button>
              </div>

              <div className="flex flex-col justify-between flex-grow p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      categoryColors[item.category] || 'bg-slate-200 text-slate-800'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-lg font-bold text-gray-600">₹{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default List
