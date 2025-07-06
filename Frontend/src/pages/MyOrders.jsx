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
    <div className='p-6 w-3/4 mx-auto'>
      <h2 className='text-2xl font-bold mb-10 text-amber-600'>My Orders</h2>
      <div className='grid gap-4'>
        {data.map((order, index) => {
          return (
            <div key={index} className='bg-white shadow-lg rounded-xl p-4 border-2 border-gray-300'>
              <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-4'>
                  <img src={parcel} alt="Parcel" className='w-12 h-12 mr-8 flex-shrink-0' />
                  
                  <div className='flex-1'>
                    <p className='text-sm text-gray-700 mb-3 leading-relaxed'>
                      {order.items.map((item, i) =>
                        <span key={i}>
                          {i !== 0 && <span>,&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                          {item.name} x {item.quantity}
                        </span>
                      )}
                    </p>
                    
                    <div className='flex items-center gap-6'>
                      <span className='text-lg font-semibold text-gray-600'>₹{order.amount}.00</span>
                      <span className='text-sm text-gray-600'>Items: {order.items.length}</span>
                      <div className='flex items-center gap-2'>
                        <span className='text-green-500'>&#x25cf;</span>
                        <span className='text-sm font-medium capitalize text-gray-600'>{order.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button onClick={getOrders} className='px-6 py-2 text-sm bg-amber-200 text-gray-800 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium flex-shrink-0'>
                  Track Order
                </button>
              </div>
            </div>
          )
        })}
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
