import foodModel from "../models/foodModel.js"
import fs from 'fs'

const addFood = async (req, res) => {
  let image = `${req.file.filename}`

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image,
    category: req.body.category

  })
  try {
    await food.save()
    res.json({ success: true, message: 'Food Item is added succesfully!' })
  }
  catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error occured while adding the Food Data' })
  }

}

const listAllFoodItems = async (req, res) => {
  try {

    const foodItems = await foodModel.find({})
    res.json({ success: true, data: foodItems })
  }
  catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error occured while getting the Food Data' })

  }

}

const removeFoodItem = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) console.log("File delete error:", err);
    })

    await foodModel.findByIdAndDelete(req.body.id)

    res.json({ success: true, message: 'Food Item is deleted succesfully!' })


  }
  catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error occured while deleting the Food Data' })

  }
}

export { addFood, listAllFoodItems, removeFoodItem }