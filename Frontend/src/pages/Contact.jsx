import React from 'react'

const Contact = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-600 mb-4 tracking-wide">
          Contact Us
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          We'd love to hear from you! Reach out for support, feedback, or just to say hello.
        </p>
        <div className="rounded-xl shadow-md p-6 text-left space-y-4 border border-gray-200">
          <p className="text-gray-800"><strong>Email:</strong> contact@quickbite.com</p>
          <p className="text-gray-800"><strong>Phone:</strong> 1-523-890-001</p>
          <p className="text-gray-800"><strong>Address:</strong> 123 Foodie Street, Flavor Town, India</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
