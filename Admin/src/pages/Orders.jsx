import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import parcel from '../assets/parcel.png'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const url = "http://localhost:4000"

  const getAllOrders = async () => {
    try {
      const res = await axios.get(url + "/api/order/list")
      if (res.data.success) {
        setOrders(res.data.data)
      } else {
        toast.error("Error fetching orders")
      }
    } catch (error) {
      toast.error("Server error")
    }
  }

  const statusData = async (e, orderId) => {
    const res= await axios.post(url + "/api/order/status" , {orderId, status: e.target.value})

    if(res.data.success){
      await getAllOrders()
    }

  }

  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <div className='p-6 w-11/12 max-w-5xl mx-auto'>
      <h2 className='text-2xl font-bold mb-10 text-amber-600'>All Orders</h2>
      <div className='grid gap-6'>
        {orders.map((order, index) => (
          <div key={index} className='bg-white border border-rose-200 shadow-sm rounded-md p-4'>
            <div className='flex justify-between items-start gap-4'>
              <div className='flex gap-4'>
                <img src={parcel} alt="Parcel" className='w-12 h-12 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-sm font-semibold text-gray-800 mb-2'>
                    {order.items.map((item, i) => (
                      <span key={i}>
                        {i !== 0 && ', '}
                        {item.name} x {item.quantity}
                      </span>
                    ))}
                  </p>
                  <div className='text-sm text-gray-600 leading-relaxed'>
                    <p><strong>{order.address?.firstName} {order.address?.lastName}</strong></p>
                    <p>{order.address?.street}</p>
                    <p>{order.address?.city}, {order.address?.state}, {order.address?.country} - {order.address?.zipcode}</p>
                    <p>{order.address?.phone || order.address?.mobile || ''}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end gap-2'>
                <p className='text-sm text-gray-700'>Items: <strong>{order.items.length}</strong></p>
                <p className='text-sm text-gray-700'>₹{order.amount || '0'}</p>
                <select
                onChange={(e) => statusData(e, order._id)}
                value = {order.status}
                  
                  className='text-sm border border-gray-300 rounded-md px-2 py-1 bg-rose-50 text-gray-800'
                >
                  <option value="processing">Food Processing</option>
                  <option value="delivered">Food Delivered</option>
                  <option value="out for delivery">Out for Delivery</option>
                </select>
              </div>
            </div>
          </div>
        ))}
        {orders.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>No orders available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
