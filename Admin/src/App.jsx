import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Layout from './components/Layout' // import Layout

import { ToastContainer } from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='font-family-poppins'>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="add" element={<Add />} />
          <Route path="list" element={<List />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
