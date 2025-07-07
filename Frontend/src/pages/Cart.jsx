import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import trash from '../assets/trash.png'
import { useNavigate } from 'react-router'

const Cart = () => {
  const { cartItem, foodItems, removeFromCart, totalAmount, url } = useContext(StoreContext)
  const navigate = useNavigate()

  const cartHasItems = foodItems.some(item => cartItem[item._id] > 0)

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-amber-600 text-center sm:text-left">
        Your Cart Items
      </h2>

      {cartHasItems ? (
        <>
          {/* Large screens - Table layout */}
          <div className="hidden sm:grid grid-cols-6 text-center font-semibold border-b border-gray-400 pb-2 mb-4 text-gray-700">
            <p>Item</p>
            <p>Name</p>
            <p>Qty</p>
            <p>Price</p>
            <p>Total</p>
            <p>Action</p>
          </div>

          <div className="space-y-6">
            {foodItems.map((item) => {
              if (cartItem[item._id] > 0) {
                return (
                  <div key={item._id} className="shadow-sm rounded-lg p-4">
                    <div className="sm:hidden rounded-lg">
                      <div className="flex items-start gap-4 mb-4">
                        <img src={url + "/images/" + item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.name}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600 font-medium">Quantity:</span>
                              <span className="text-gray-800">{cartItem[item._id]}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 font-medium">Price:</span>
                              <span className="text-gray-800">₹{item.price}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 font-medium">Total:</span>
                              <span className="text-gray-800 font-semibold">₹{item.price * cartItem[item._id]}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => removeFromCart(item._id)}
                        >
                          <img src={trash} alt="Delete" className="w-5 h-5" />

                        </button>
                      </div>
                    </div>

                    <div className="hidden sm:grid sm:grid-cols-6 sm:items-center text-sm gap-4">
                      <div className="flex justify-center">
                        <img src={url + "/images/" + item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      </div>
                      <p className="text-gray-800">{item.name}</p>
                      <p className="text-center">{cartItem[item._id]}</p>
                      <p className="text-center">₹{item.price}</p>
                      <p className="text-center">₹{item.price * cartItem[item._id]}</p>
                      <div className="flex justify-center">
                        <img
                          src={trash}
                          alt="Delete Icon"
                          className="w-5 h-5 cursor-pointer hover:scale-110 transition"
                          onClick={() => removeFromCart(item._id)}
                        />
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
        </>
      ) : (
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 text-center mt-10">
          Nothing in cart yet
        </h2>
      )}

      {/* Price Summary */}
      {cartHasItems && (
        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-10 text-sm">
          <section className="w-full lg:w-1/2 bg-white p-5 sm:p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">Total Cart Items</h2>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-800 font-medium">₹{totalAmount()}</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <p className="text-gray-600">Delivery Fee</p>
              <p className="text-gray-800 font-medium">₹48</p>
            </div>
            <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-800">
              <p>Total</p>
              <p>₹{48 + totalAmount()}</p>
            </div>
            <button
              onClick={() => navigate('/order')}
              className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-500 transition"
            >
              PROCEED TO CHECKOUT
            </button>
          </section>

          <section className="w-full lg:w-1/2 bg-white p-5 sm:p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              If you have a promo code, enter it here
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter promo code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
              />
              <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-500 transition">
                Submit
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Cart