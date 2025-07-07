import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import parcel from '../assets/parcel.png'
import axios from 'axios'

const MyOrders = () => {
  const [data, setData] = useState([])
  const { url, token } = useContext(StoreContext)

  const getOrders = async () => {
    try {
      const res = await axios.post(url + "/api/order/userorders", {}, {
        headers: { token }
      })
      setData(res.data.data)
    } catch (err) {
      console.error("Failed to fetch orders", err)
    }
  }

  useEffect(() => {
    if (token) {
      getOrders()
    }
  }, [token])

  return (
    <div className='p-4 sm:p-6 w-full max-w-5xl mx-auto'>
      <h2 className='text-xl sm:text-2xl font-bold mb-6 sm:mb-10 text-amber-600'>My Orders</h2>
      <div className='grid gap-4'>
        {data.map((order, index) => (
          <div key={index} className='bg-white shadow-md sm:shadow-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
              <div className='flex items-start sm:items-center gap-4 w-full'>
                <img src={parcel} alt="Parcel" className='w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0' />

                <div className='flex-1'>
                  <p className='text-sm text-gray-700 mb-2 leading-relaxed'>
                    {order.items.map((item, i) =>
                      <span key={i}>
                        {i !== 0 && <span>,&nbsp;</span>}
                        {item.name} x {item.quantity}
                      </span>
                    )}
                  </p>

                  <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600'>
                    <span className='font-semibold text-base'>₹{order.amount}.00</span>
                    <span>Items: {order.items.length}</span>
                    <div className='flex items-center gap-1'>
                      <span className='text-green-500'>&#x25cf;</span>
                      <span className='capitalize'>{order.status}</span>
                    </div>
                  </div>
                </div>
                
                <button onClick={getOrders} className='px-6 py-2 text-sm bg-amber-200 text-gray-800 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium flex-shrink-0'>
                  Track Order
                </button>
              </div>

              <button
                onClick={getOrders}
                className='px-4 py-2 text-xs sm:text-sm bg-amber-200 text-gray-800 rounded-full hover:bg-amber-500 cursor-pointer transition-colors duration-200 font-medium'
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>You have no orders yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyOrders
