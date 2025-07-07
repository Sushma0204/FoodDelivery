import React from 'react'
import { NavLink } from 'react-router-dom'
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
      
          <NavLink to="/" className="flex-shrink-0">
            <h1 className="text-amber-600 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              QuickBite
            </h1>
          </NavLink>

          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-amber-100 rounded-full cursor-pointer">
              <img 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                src={user} 
                alt="User Icon" 
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar