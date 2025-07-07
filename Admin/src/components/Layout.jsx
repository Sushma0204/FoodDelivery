import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 w-full md:ml-0">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
