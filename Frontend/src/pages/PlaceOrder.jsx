import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router'

const PlaceOrder = () => {
  const { totalAmount, token, foodItems, cartItem, url } = useContext(StoreContext)

  const navigate = useNavigate()

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const placeTheOrder = async (e) => {
    e.preventDefault()
    let orderItems = []
    foodItems.forEach((item) => {
      if (cartItem[item._id] > 0) {
        const itemInfo = { ...item, quantity: cartItem[item._id] }
        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount() + 2
    }
    
    try {
      const response = await fetch(url + "/api/order/place", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify(orderData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        const { sessionUrl } = result
        window.location.replace(sessionUrl)
      } else {
        alert("Error")
      }
    } catch (error) {
      console.error('Error placing order:', error)
      alert("Error placing order")
    }
  }

  const onChangeData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const inputClass = "w-full border border-gray-400 focus:outline-none p-3 rounded-md text-sm transition-all"
  const halfInputClass = "flex-1 border border-gray-400 focus:outline-none p-3 rounded-md text-sm transition-all"

  useEffect(() => {
    if(!token) {
      navigate('/cart')
    }
    else if(totalAmount() === 0){
      navigate('/cart')
    }
  }, [token])

  return (
    <div className=" bg-gray-50 text-sm py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div onSubmit={placeTheOrder} className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-7/12 text-sm bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">Delivery Information</h3>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  required
                  name="firstName"
                  value={data.firstName}
                  onChange={onChangeData}
                  type="text"
                  placeholder="First Name"
                  className={halfInputClass}
                />
                <input
                  required
                  name="lastName"
                  value={data.lastName}
                  onChange={onChangeData}
                  type="text"
                  placeholder="Last Name"
                  className={halfInputClass}
                />
              </div>

              
              <input
                required
                name="email"
                value={data.email}
                onChange={onChangeData}
                type="email"
                placeholder="Email Address"
                className={inputClass}
              />

              
              <input
                required
                name="street"
                value={data.street}
                onChange={onChangeData}
                type="text"
                placeholder="Street Address"
                className={inputClass}
              />

              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  required
                  name="city"
                  value={data.city}
                  onChange={onChangeData}
                  type="text"
                  placeholder="City"
                  className={halfInputClass}
                />
                <input
                  required
                  name="state"
                  value={data.state}
                  onChange={onChangeData}
                  type="text"
                  placeholder="State"
                  className={halfInputClass}
                />
              </div>

             
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  required
                  name="zipcode"
                  value={data.zipcode}
                  onChange={onChangeData}
                  type="text"
                  placeholder="Zip Code"
                  className={halfInputClass}
                />
                <input
                  required
                  name="country"
                  value={data.country}
                  onChange={onChangeData}
                  type="text"
                  placeholder="Country"
                  className={halfInputClass}
                />
              </div>

              
              <input
                required
                name="phone"
                value={data.phone}
                onChange={onChangeData}
                type="tel"
                placeholder="Phone Number"
                className={inputClass}
              />
            </div>
          </div>

      
          <div className="w-full lg:w-5/12 bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-6 h-fit">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <p className="text-gray-600 text-sm sm:text-base">Subtotal</p>
                <p className="text-gray-800 font-medium text-sm sm:text-base">₹{totalAmount()}</p>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <p className="text-gray-600 text-sm sm:text-base">Delivery Fee</p>
                <p className="text-gray-800 font-medium text-sm sm:text-base">₹48</p>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <p className="text-gray-800 font-semibold text-base sm:text-lg">Total</p>
                <p className="text-gray-800 font-semibold text-base sm:text-lg">₹{48 + totalAmount()}</p>
              </div>
            </div>

            <button 
              onClick={placeTheOrder} 
              className="w-full bg-amber-600 cursor-pointer text-white py-3 px-4 rounded-md hover:bg-amber-500 active:bg-amber-500 transition-colors font-medium text-sm sm:text-base mt-6"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder