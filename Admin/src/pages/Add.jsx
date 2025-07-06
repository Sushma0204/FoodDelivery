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
    <div className="p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white px-5 py-8 rounded-2xl shadow-lg w-full max-w-xl">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-gray-600 font-medium text-lg">Upload Product Image</p>
          <label htmlFor="image" className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-50">
            <img
              src={image ? URL.createObjectURL(image) : upload}
              alt="Upload Area icon"
              className={image ? "w-40 h-40 object-cover rounded-xl" : "w-12 h-12"}
            />
          </label>
          <input onChange={handleImageChange} type="file" id="image" hidden required />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-600 font-medium">Product Name</p>
          <input
            onChange={onChangeData}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter product name"
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-600 font-medium">Product Description</p>
          <textarea
            onChange={onChangeData}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Describe the product in detail"
            className="border border-gray-300 p-3 rounded-xl resize-none outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-600 font-medium">Product Category</p>
          <select
            name="category"
            value={data.category}
            onChange={onChangeData}
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-1 focus:ring-gray-300"
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

        <div className="flex flex-col gap-2">
          <p className="text-gray-600 font-medium">Product Price (in ₹)</p>
          <input
            onChange={onChangeData}
            value={data.price}
            type="number"
            name="price"
            placeholder="e.g. 299"
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-800 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  )
}

export default Add
