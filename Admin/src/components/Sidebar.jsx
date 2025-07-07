import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import add from '../assets/add.png'
import list from '../assets/list.png'
import order from '../assets/order.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const menuItems = [
    { icon: add, label: 'Add Items', to: "/add" },
    { icon: list, label: 'List Items', to: "/list" },
    { icon: order, label: 'Orders', to: "/orders" }
  ]

  return (
    <div className={`
      min-h-screen border-r-2 bg-amber-100 border-gray-300
      flex flex-col justify-between
      transition-all duration-300
      ${isOpen ? 'w-72' : 'w-20'}
    `}>
      <div>
        <div className="flex items-center justify-between p-4">
          <h1 className={`
            text-amber-600 font-bold text-base sm:text-xl whitespace-nowrap overflow-hidden transition-all duration-300
            ${!isOpen && 'w-0'}
          `}>
            Admin Panel
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-amber-600 p-2 focus:outline-none"
          >
            <img
              src={isOpen ? close : menu}
              alt="Toggle"
              className="w-5 h-5 invert"
            />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-2">
          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              className={({ isActive }) => `
                flex items-center gap-4 text-amber-600 p-4 hover:bg-white transition
                ${isActive ? 'bg-white font-bold' : ''}
              `}
            >
              <img src={item.icon} alt="" className="w-6 h-6" />
              <span className={`
                whitespace-nowrap overflow-hidden transition-all duration-300
                ${!isOpen && 'w-0'}
              `}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 text-xs text-center font-semibold text-amber-600">
        {isOpen && 'Admin Dashboard v2.0'}
      </div>
    </div>
  )
}

export default Sidebar
