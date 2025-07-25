import userModel from '../models/userModel.js'

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId })
    let cartData =  userData.cartData
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1
    } else {
      cartData[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData })
    res.json({ success: true, message: "Added to Cart" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId })
    let cartData = userData.cartData
    if (cartData[req.body.itemId]) {
      cartData[req.body.itemId] -= 1
      if (cartData[req.body.itemId] <= 0) {
        delete cartData[req.body.itemId]
      }
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData })
    res.json({ success: true, message: "Removed from Cart" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId })
    let cartData = userData.cartData
    res.json({ success: true, cartData})
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

export { addToCart, removeFromCart, getCart }
