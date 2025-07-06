import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const Verify = () => {
  const [searchParams] = useSearchParams()
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")

  const { url } = useContext(StoreContext)
  const navigate = useNavigate()

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await axios.post(`${url}/api/order/verify`, {
          success,
          orderId
        })
        if(res.data.success){
          navigate("/myorders")
        }
      } catch (error) {
        navigate("/")
        console.error("Verification failed", error)
      }
    }

    verifyPayment()
  }, [success, orderId, url])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <svg className="animate-spin h-10 w-10 text-amber-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        <p className="text-gray-700 font-medium">Verifying your payment...</p>
      </div>
    </div>
  )
}

export default Verify
