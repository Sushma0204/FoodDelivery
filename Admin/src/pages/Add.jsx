import React, { useState } from 'react'
import upload from '../assets/upload.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Add = () => {
  const url = "http://localhost:4000"
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Beverages'
  })

  const onChangeData = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) setImage(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image || !data.name || !data.description || !data.price) {
      alert('Please fill all the fields and upload an image.')
      return
    }

    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', Number(data.price))
    formData.append('category', data.category)

    const res = await axios.post(`${url}/api/food/add`, formData)

    if (res.data.success) {
      setImage(false)
      setData({ name: '', description: '', price: '', category: 'Beverages' })
      toast.success(res.data.message)
    }
    else {
      toast.error(res.data.error)
    }
  }

  return (
    <div className="w-full max-w-4xl test-sm my-5 mx-auto">
      
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full mb-6">
              <p className="text-gray-700 font-semibold text-sm sm:text-lg mb-4 text-center lg:text-left">Upload Product Image</p>
              <label htmlFor="image" className="block w-full max-w-xs mx-auto lg:mx-0">
                <div className="w-full h-48 sm:h-56 lg:h-64 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <img
                    src={image ? URL.createObjectURL(image) : upload}
                    alt="Upload Area"
                    className={image ? "w-full h-full object-cover rounded-xl" : "w-12 h-12 sm:w-16 sm:h-16 opacity-60"}
                  />
                </div>
              </label>
              <input onChange={handleImageChange} type="file" id="image" hidden required />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm sm:text-lg font-semibold mb-2">Product Name</label>
              <input
                onChange={onChangeData}
                value={data.name}
                type="text"
                name="name"
                placeholder="Enter product name"
                className="w-full border placeholder:text-sm border-gray-300 p-3 sm:p-4 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm sm:text-lg font-semibold mb-2">Product Description</label>
              <textarea
                onChange={onChangeData}
                value={data.description}
                name="description"
                rows="4"
                placeholder="Describe the product in detail"
                className="w-full border placeholder:text-sm border-gray-300 p-3 sm:p-4 rounded-xl resize-none outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 text-sm sm:text-lg sm:grid-cols-2 gap-4">
          
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Category</label>
                <select
                  name="category"
                  value={data.category}
                  onChange={onChangeData}
                  className="w-full border text-sm placeholder:text-sm border-gray-300 p-3 sm:p-4 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="Beverages">Beverages</option>
                  <option value="Biriyani">Biriyani</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Fast Food">Fast Food</option>
                  <option value="Starters">Starters</option>
                  <option value="Salads">Salads</option>
                  <option value="North Indian">North Indian</option>
                  <option value="South Indian">South Indian</option>
                  <option value="Noodles">Noodles</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Non Veg">Non Veg</option>
                </select>
              </div>

              <div>
                <label className="block text-sm sm:text-lg text-gray-700 font-semibold mb-2">Price (₹)</label>
                <input
                  onChange={onChangeData}
                  value={data.price}
                  type="number"
                  name="price"
                  placeholder="e.g. 299"
                  className="w-full border placeholder:text-sm border-gray-300 p-3 sm:p-4 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-sm sm:text-lg bg-amber-600 text-white py-3 sm:py-4 rounded-xl font-semibold cursor-pointer hover:bg-amber-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              ADD PRODUCT
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add