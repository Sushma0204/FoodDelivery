import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
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
    let res = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    if (res.data.success) {
      const { sessionUrl } = res.data
      window.location.replace(sessionUrl)
    }
    else {
      alert("Error")
    }
  }

  const onChangeData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const inputClass = "w-full border border-gray-400 focus:outline-none p-2 rounded"
  const halfInputClass = "w-1/2 border border-gray-400 focus:outline-none p-2 rounded"

  useEffect(() => {
    if(!token) {
      navigate('/cart')
    }
    else if(totalAmount() === 0){
      navigate('/cart')

    }
  }, [token])

  return (
    <form onSubmit={placeTheOrder} className="flex flex-col lg:flex-row gap-6 py-5 px-20 my-10">
      <div className="w-full lg:w-5/12 text-xs space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Delivery Information</h3>
        <div className="flex gap-4">
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
          placeholder="Street"
          className={inputClass}
        />
        <div className="flex gap-4">
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
        <div className="flex gap-4">
          <input
            required
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeData}
            type="text"
            placeholder="Zip Code"
            className={inputClass}
          />
          <input
            required
            name="country"
            value={data.country}
            onChange={onChangeData}
            type="text"
            placeholder="Country"
            className={inputClass}
          />
        </div>
        <input
          required
          name="phone"
          value={data.phone}
          onChange={onChangeData}
          type="text"
          placeholder="Phone Number"
          className={inputClass}
        />
      </div>

      <div className="w-full lg:w-5/12 ml-auto text-sm p-6 space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700">Total Cart Items</h2>
        <div className="flex justify-between border-b border-gray-400 pb-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-gray-800 font-medium">₹{totalAmount()}</p>
        </div>
        <div className="flex justify-between border-b border-gray-400 pb-2">
          <p className="text-gray-600">Delivery Fee</p>
          <p className="text-gray-800 font-medium">₹48</p>
        </div>
        <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-800">
          <p>Total</p>
          <p>₹{48 + totalAmount()}</p>
        </div>
        <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-500 cursor-pointer transition">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  )
}

export default PlaceOrder
