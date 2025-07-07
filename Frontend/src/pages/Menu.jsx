import React from 'react'
import menu from '../assets/menu-bg.jpg'

const Menu = () => {
  return (
    <section id="food-items-section" className="px-4 sm:px-6 md:px-8 py-10 bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-600 mb-4 tracking-wide">
          Our Menu
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          Browse a variety of delicious dishes curated just for you. <br />
          To explore and filter food items by category, please visit the{" "}
          <a
            href="/"
            className="text-amber-600 underline hover:text-amber-500 transition duration-200"
          >
            Home
          </a>{" "}
          page.
        </p>
        <div className="mt-6 sm:mt-10">
          <img
            src={menu}
            alt="Delicious food"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Menu
