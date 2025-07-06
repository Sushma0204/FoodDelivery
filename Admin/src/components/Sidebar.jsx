import React from 'react'
import add from '../assets/add.png'
import list from '../assets/list.png'
import order from '../assets/order.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const menuItems = [
    { icon: add, label: 'Add Items', to: "/add" },
    { icon: list, label: 'List Items', to: "/list" },
    { icon: order, label: 'Orders', to: "/orders" }
  ]

  return (
    <div className="flex flex-col w-1/4 min-h-screen border-r border-gray-400 p-6 shadow-sm">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-4 p-3 border border-gray-400 mb-5 rounded-3xl cursor-pointer transition-all ${
              isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`
          }
        >
          <img src={item.icon} alt={`${item.label} Icon`} className="w-6 h-6" />
          <p className="text-gray-700 font-medium">{item.label}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
