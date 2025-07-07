import React from 'react'
import menu from '../assets/menu-bg.jpg'

const Menu = () => {
  return (
    <section id="food-items-section" className="px-4 sm:px-6 md:px-8 pt-5 pb-3">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-600 mb-4 tracking-wide">
          Our Menu
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          Browse a variety of delicious dishes curated just for you. <br />
          To explore and filter food items by category, please visit the{' '}
          <a
            href="/"
            className="text-amber-600 underline hover:text-amber-500 transition duration-200"
          >
            Home
          </a>{' '}
          page.
        </p>

        <div className="my-6 sm:my-10">
          <img
            src={menu}
            alt="Delicious food"
            className="rounded-xl sm:rounded-2xl shadow-lg w-full max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Menu
