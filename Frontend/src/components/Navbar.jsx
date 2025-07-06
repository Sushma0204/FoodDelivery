import React, { useContext, useState } from 'react'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import bag from '../assets/bag.png'
import user from '../assets/user.png'
import logout from '../assets/logout.png'

const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'Menu', to: '/menu' },
  { name: 'Mobile-App', to: '/mobile-app' },
  { name: 'Contact-Us', to: '/contact-us' },
]



const Navbar = ({ setShowLogin }) => {
  const { cartItem, token, setToken } = useContext(StoreContext)

  const count = Object.values(cartItem).reduce((sum, val) => sum + val, 0)

 
  const navigate = useNavigate()
  const logoutUser = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <nav className="p-4 flex justify-around items-center bg-white shadow-md drop-shadow-gray-100">
      <NavLink to="/"><h1 className="text-amber-600 font-bold sm:text-sm lg:text-4xl">QuickBite</h1></NavLink>

      <ul className="flex gap-7 text-sm items-center  hover: cursor-pointer">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            to={item.to}
            className={({ isActive }) =>
              `relative transition-all duration-200 ${isActive ? 'text-amber-600 underline underline-offset-4' : 'hover:underline hover:text-amber-600 underline-offset-4'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <div className="flex gap-10 items-center">
        <img
          className="w-6 h-6 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          src={search}
          alt="Search"
          aria-label="Search"
        />
        <div className='relative hover:cursor-pointer'>
          <NavLink to="/cart">


            <img
              className="w-6 h-6 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              src={cart}
              alt="Cart"

              aria-label="Shopping Cart"
            />
          </NavLink>

          <span className="flex justify-center items-center absolute -top-1 -right-2 font-semibold bg-amber-600 text-white text-[10px] w-5 h-5 rounded-full">{count || 0}</span>


        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className="bg-amber-600 text-xs transition duration:200 hover:bg-amber-500 px-3 py-2 text-center rounded-3xl text-white cursor-pointer">
          Sign In
        </button>
          : <div className="relative group cursor-pointer">
            <img src={user} alt="User Icon" className="w-7 h-7" />

            <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg 
                opacity-0 group-hover:opacity-100 group-hover:visible invisible 
                transition-all duration-200 z-50 pointer-events-auto">
              <NavLink to="/myorders" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img  src={bag} alt="Bag Icon" className="w-4 h-4" />
                <p className="text-sm text-gray-700">Orders</p>
              </NavLink>
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={logoutUser}
              >
                <img src={logout} alt="Logout icon" className="w-4 h-4" />
                <p className="text-sm text-gray-700">Logout</p>
              </li>
            </ul>
          </div>
        }

      </div>
    </nav>
  )
}

export default Navbar