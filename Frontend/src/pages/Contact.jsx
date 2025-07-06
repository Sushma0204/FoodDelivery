import React from 'react'

const Contact = () => {
  return (
    <section className="p-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-amber-600 mb-4 tracking-wide">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          We'd love to hear from you! Reach out for support, feedback, or just to say hello.
        </p>
        <div className="bg-white rounded-xl shadow-md p-6 text-left space-y-4">
          <p className="text-gray-800"><strong>Email:</strong> contact@quickbite.com</p>
          <p className="text-gray-800"><strong>Phone:</strong>1-523-890-001</p>
          <p className="text-gray-800"><strong>Address:</strong> 123 Foodie Street, Flavor Town, India</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
