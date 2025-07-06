import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Mobile from './pages/Mobile'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import Login from './pages/Login'
import Verify from './pages/Verify'
import MyOrders from './pages/MyOrders'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='font-family-poppins min-h-screen flex flex-col'>
        <Navbar setShowLogin={setShowLogin} />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/mobile-app' element={<Mobile />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<MyOrders />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
