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
    const res = await axios.post(url + "/api/order/status", { orderId, status: e.target.value })

    if (res.data.success) {
      await getAllOrders()
    }
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'out for delivery': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="w-full sm:w-3/4 mx-auto p-5">

      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-3xl font-bold text-amber-600 text-center">Order Management</h2>
        <p className="text-gray-600 text-center text-sm sm:text-base mt-2">Track and manage all customer orders</p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {orders.length === 0 ? (

          <div className="text-center py-12 sm:py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-md mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={parcel} alt="No Orders" className="w-8 h-8 sm:w-10 sm:h-10 opacity-50" />
              </div>
              <p className="text-lg sm:text-xl text-gray-500 font-medium">No orders available</p>
              <p className="text-sm text-gray-400 mt-2">Orders will appear here when customers place them</p>
            </div>
          </div>
        ) : (

          <>
            <div className="mb-6 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
              </span>
            </div>


            {orders.map((order, index) => (
              <div key={index} className="bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-2xl p-3 sm:p-6 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                  <div className="flex gap-3 sm:gap-4 flex-1">
                    <div className="flex-shrink-0 sm:block hidden">
                      <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center">
                        <img src={parcel} alt="Order" className="w-7 h-7" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <h3 className="text-xs sm:text-base font-semibold text-gray-800 mb-1">Order Items:</h3>
                        <p className="text-xs text-gray-600 break-words">
                          {order.items.map((item, i) => (
                            <span key={i} className="inline-block mr-1 mb-3">
                              {i !== 0 && ' '}
                              <span className="bg-gray-100 px-2 py-1 rounded-lg text-[9px] sm:text-sm">
                                {item.name} × {item.quantity}
                              </span>
                            </span>
                          ))}
                        </p>
                      </div>

                      <div className="text-xs text-gray-600 space-y-1">
                        <p className="font-medium text-gray-800">
                          {order.address?.firstName} {order.address?.lastName}
                        </p>
                        <p className="text-gray-600">{order.address?.street}</p>
                        <p className="text-gray-600">
                          {order.address?.city}, {order.address?.state}, {order.address?.country} - {order.address?.zipcode}
                        </p>
                        {(order.address?.phone || order.address?.mobile) && (
                          <p className="text-gray-600 font-medium">
                            Phone: {order.address?.phone || order.address?.mobile}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col text-gray-600 sm:flex-row lg:flex-col gap-3 sm:gap-4 text-right">
                    <div className="flex flex-row lg:flex-col gap-3">
                      <div className="text-xs sm:text:sm">
                        <span>Items: {order.items.length}</span>
                      </div>
                      <div className="text-xs sm:text:sm">
                        <span>Total:{'\u00A0'}₹{order.amount || '0'}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-center">
                      <select
                        onChange={(e) => statusData(e, order._id)}
                        value={order.status}
                        className={`text-sm border rounded-xl px-3 py-2 font-medium transition-all cursor-pointer min-w-40 ${getStatusColor(order.status)}`}
                      >
                        <option value="processing">Food Processing</option>
                        <option value="out for delivery">Out for Delivery</option>
                        <option value="delivered">Food Delivered</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Orders