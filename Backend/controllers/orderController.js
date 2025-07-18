import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_KEY)

const placeOrder = async (req, res) => {
  const frontend_url = "https://fooddelivery-frontend-kx8w.onrender.com"
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    })

    await newOrder.save()
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} })

    const lineItems = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    }))

    lineItems.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges"
        },
        unit_amount: 48 * 100
      },
      quantity: 1
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    })

    res.status(200).json({ success: true, sessionUrl: session.url })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: error.message })
  }
}

const verifyOrder = async (req, res) => {
  const {orderId, success} = req.body
  try {
    if(success == "true"){
      await orderModel.findByIdAndUpdate(orderId, {payment: true})
      res.json({success: true, message: "Paid"})
    }
    else{
      await orderModel.findByIdAndDelete(orderId)
      res.json({success: false, message: "Not Paid"})
    }
    
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
    
  }

}

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({success: true, data: orders})
    
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
    
  }

}

const userOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({userId: req.body.userId})
    res.json({success: true, data: orders})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
  }

}

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status})
    res.json({success: true, message: "Staus Updated" })
    
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
    
  }

}

export { updateStatus, placeOrder, verifyOrder, userOrder, listOrders }
