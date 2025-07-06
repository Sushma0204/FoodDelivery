import React from 'react'
import {NavLink} from 'react-router-dom'
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-around items-center bg-white shadow-md drop-shadow-gray-100">

      <NavLink to="/"><h1 className="text-amber-600 font-bold sm:text-sm lg:text-4xl">QuickBite</h1></NavLink>

      <img className='h-8 w-8' src={user} alt="User Icon" />

    </nav>
  )
}

export default Navbar