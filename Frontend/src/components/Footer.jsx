import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white px-4 sm:px-8 md:px-10 pt-10 pb-5 w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>

        <div className='col-span-1 sm:col-span-2 md:col-span-2 flex flex-col gap-5'>
          <h1 className="text-amber-600 font-bold text-2xl sm:text-3xl">QuickBite</h1>
          <p className='text-xs leading-6'>
            QuickBite is your go-to destination for discovering delicious meals from top-rated local restaurants.
            We’re committed to delivering fast, fresh, and flavorful food right to your doorstep. Whether you're craving comfort food, healthy options, or international cuisine, QuickBite has it all.
            Join thousands of satisfied customers who trust us for their daily bites.
          </p>
          <section className='flex gap-4'>
            <img className='w-6 h-6 sm:w-7 sm:h-7' src={facebook} alt="Facebook" />
            <img className='w-6 h-6 sm:w-7 sm:h-7' src={instagram} alt="Instagram" />
            <img className='w-6 h-6 sm:w-7 sm:h-7' src={twitter} alt="Twitter" />
            <img className='w-6 h-6 sm:w-7 sm:h-7' src={linkedin} alt="LinkedIn" />
          </section>
        </div>

        <div className='col-span-1 sm:col-span-1 md:col-span-1 flex flex-col gap-5'>
          <h2 className='text-xl font-semibold'>COMPANY DETAILS</h2>
          <p className='text-sm'>Important Links</p>
          <ul className='text-xs leading-6'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='col-span-1 sm:col-span-1 md:col-span-1 flex flex-col gap-5'>
          <h2 className='text-xl font-semibold'>GET IN TOUCH</h2>
          <p className='text-sm'>+1-523-890-001</p>
          <p className='text-sm'>contact@quickbite.com</p>
        </div>
      </div>

      <p className='text-xs sm:text-sm font-semibold text-center mt-10'>
        © 2025 Quickbite.com | All rights reserved!
      </p>
    </div>
  )
}

export default Footer
