import React from 'react'
import {menu} from '../assets/menu-bg.jpg'

const Menu = () => {
  return (
    <section id="food-items-section" className="p-8 bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-amber-600 mb-4 tracking-wide">Our Menu</h2>
        <p className="text-lg text-gray-700 mb-8">
          Browse a variety of delicious dishes curated just for you. <br />
          To explore and filter food items by category, please visit the{" "}
          <a href="/" className="text-amber-600 underline hover:text-amber-500 transition duration-200">Home</a> page.
        </p>
        <div className="mt-10">
          <img
            src={menu}
            alt="Delicious food"
            className="rounded-2xl shadow-lg w-full max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Menu
