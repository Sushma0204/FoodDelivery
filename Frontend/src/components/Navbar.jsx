import React, { useContext, useState } from 'react'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import bag from '../assets/bag.png'
import user from '../assets/user.png'
import logout from '../assets/logout.png'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'Menu', to: '/menu' },
  { name: 'Mobile-App', to: '/mobile-app' },
  { name: 'Contact-Us', to: '/contact-us' },
]

const Navbar = ({ setShowLogin }) => {
  const { cartItem, token, setToken } = useContext(StoreContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const count = Object.values(cartItem).reduce((sum, val) => sum + val, 0)

  const navigate = useNavigate()
  const logoutUser = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <div className="relative">
      <nav className="p-2 sm:p-4 flex justify-between items-center bg-white shadow-md drop-shadow-gray-100 relative z-50">
        <NavLink to="/" className="flex-shrink-0">
          <h1 className="text-amber-600 font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            QuickBite
          </h1>
        </NavLink>

        <ul className="hidden md:flex gap-3 md:gap-5 lg:gap-7 text-xs sm:text-sm md:text-base items-center cursor-pointer">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `relative transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? 'text-amber-600 underline underline-offset-4' 
                    : 'hover:underline hover:text-amber-600 underline-offset-4'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        <div className="flex gap-3 sm:gap-5 md:gap-7 lg:gap-10 items-center">
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            src={search}
            alt="Search"
            aria-label="Search"
          />

          <div className='relative hover:cursor-pointer'>
            <NavLink to="/cart">
              <img
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                src={cart}
                alt="Cart"
                aria-label="Shopping Cart"
              />
            </NavLink>
            <span className="flex justify-center items-center absolute -top-1 -right-2 font-semibold bg-amber-600 text-white text-[8px] sm:text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full">
              {count || 0}
            </span>
          </div>

          {!token ? (
            <button 
              onClick={() => setShowLogin(true)} 
              className="bg-amber-600 text-[10px] sm:text-xs transition duration-200 hover:bg-amber-500 px-2 py-1 sm:px-3 sm:py-2 text-center rounded-2xl sm:rounded-3xl text-white cursor-pointer whitespace-nowrap"
            >
              Sign In
            </button>
          ) : (
            <div className="relative group cursor-pointer">
              <img src={user} alt="User Icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />

              <ul className="absolute right-0 mt-2 w-28 sm:w-32 bg-white border border-gray-200 rounded-md shadow-lg 
                  opacity-0 group-hover:opacity-100 group-hover:visible invisible 
                  transition-all duration-200 z-50 pointer-events-auto">
                <NavLink to="/myorders" className="flex items-center gap-2 px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img src={bag} alt="Bag Icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                  <p className="text-xs sm:text-sm text-gray-700">Orders</p>
                </NavLink>
                <li
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={logoutUser}
                >
                  <img src={logout} alt="Logout icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                  <p className="text-xs sm:text-sm text-gray-700">Logout</p>
                </li>
              </ul>
            </div>
          )}

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t md:hidden z-40">
          <ul className="flex flex-col py-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm transition-all duration-200 ${
                    isActive 
                      ? 'text-amber-600 bg-amber-50' 
                      : 'hover:bg-gray-100 hover:text-amber-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
