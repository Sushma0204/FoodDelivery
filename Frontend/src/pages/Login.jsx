import React, { useContext, useState } from 'react'
import close from '../assets/close.png'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const Login = ({ setShowLogin }) => {
  const [curr, setCurr] = useState("Sign Up")
  const [data, setData] = useState({ name: "", email: "", password: "" })

  const onChangeData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(prev => ({ ...prev, [name]: value }))
  }

  const { url, setToken } = useContext(StoreContext)

  const onLogin = async (e) => {
    e.preventDefault()
    let newUrl = url
    if (curr === "Sign Up") {
      newUrl += "/api/user/register"
    } else {
      newUrl += "/api/user/login"
    }

    const res = await axios.post(newUrl, data)

    if (res.data.success) {
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
      setShowLogin(false)
    } else {
      alert(res.data.message)
    }
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center z-50 px-2 sm:px-4 md:px-8' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className='w-full max-w-sm sm:max-w-md bg-white shadow-md px-4 sm:px-6 py-6 rounded-md'>

        <div className='relative flex justify-center items-center mb-4'>
          <h3 className='text-amber-600 text-xl sm:text-2xl font-bold'>{curr}</h3>
          <img
            className='w-5 h-5 absolute right-0 top-0 cursor-pointer'
            onClick={() => setShowLogin(false)}
            src={close}
            alt="Close Icon"
          />
        </div>

        <form onSubmit={onLogin} className='flex flex-col gap-4'>
          {curr === 'Sign Up' && (
            <input
              name='name'
              value={data.name}
              onChange={onChangeData}
              className='border border-gray-400 p-2 rounded-md focus:outline-none text-sm'
              type="text"
              placeholder='Enter your name'
              required
            />
          )}

          <input
            name='email'
            value={data.email}
            onChange={onChangeData}
            className='border border-gray-400 p-2 rounded-md focus:outline-none text-sm'
            type="email"
            placeholder='Enter your email'
            required
          />
          <input
            name='password'
            value={data.password}
            onChange={onChangeData}
            className='border border-gray-400 p-2 rounded-md focus:outline-none text-sm'
            type="password"
            placeholder='Enter your password'
            required
          />

          <div className='flex items-start gap-2 text-xs'>
            <input className='mt-1' type="checkbox" required />
            <p className='text-gray-500 leading-snug'>
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>

          <button className='bg-amber-600 rounded-md p-2 font-semibold text-white text-sm'>
            {curr === 'Login' ? 'Login' : 'Create an Account'}
          </button>

          {curr === 'Sign Up' ? (
            <p className='text-sm text-center'>
              Already have an account?{' '}
              <span className='text-amber-600 cursor-pointer font-semibold' onClick={() => setCurr('Login')}>
                Login here
              </span>
            </p>
          ) : (
            <p className='text-sm text-center'>
              Create a new account?{' '}
              <span className='text-amber-600 cursor-pointer font-semibold' onClick={() => setCurr('Sign Up')}>
                Click here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
