import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white px-10 pt-10 pb-5 h-auto w-full '>

      <div className=' grid grid-cols-4'>

        <div className='flex flex-col col-span-2 gap-5'>
          <h1 className="text-amber-600 font-bold text-4xl">QuickBite</h1>
          <p className='text-xs leading-6 w-10/12'>QuickBite is your go-to destination for discovering delicious meals from top-rated local restaurants.
            We’re committed to delivering fast, fresh, and flavorful food right to your doorstep.
            Whether you're craving comfort food, healthy options, or international cuisine, QuickBite has it all.
            Join thousands of satisfied customers who trust us for their daily bites.</p>
          <section className='flex gap-4'>
            <img className='w-8 h-8' src={facebook} alt="Facebook icon" />
            <img className='w-8 h-8' src={instagram} alt="Facebook icon" />
            <img className='w-8 h-8' src={twitter} alt="Facebook icon" />
            <img className='w-8 h-8' src={linkedin} alt="Facebook icon" />
          </section>
        </div>

        <div className='flex flex-col col-span-1 gap-5'>
          <h2 className='text-2xl font-semibold'>COMPANY DETAILS</h2>
          <p className='text-sm'>Important Links</p>
          <ul className='list-style-none text-xs leading-6'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

        <div className='flex flex-col col-span-1 gap-5'>
          <h2 className='text-2xl font-semibold'>GET IN TOUCH</h2>
          <p className='text-sm'>+1-523-890-001</p>
          <p className='text-sm'>contact@quickbite.com</p>
        </div>




      </div>
      <p className='text-sm font-semibold text-center bottom-0'>Copyright 2025 © Quickbite.com | All rights reserved!</p>
    </div>
  )
}

export default Footer