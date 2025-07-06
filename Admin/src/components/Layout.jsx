import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-2 py-5">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
