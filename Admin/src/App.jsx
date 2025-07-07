import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Layout from './components/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='font-family-poppins w-full min-h-screen'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="text-sm"
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Add />} /> 
          <Route path="add" element={<Add />} />
          <Route path="list" element={<List />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App