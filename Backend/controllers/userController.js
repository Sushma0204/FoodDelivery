import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const loginUser = async (req, res) => {

  const { email, password } = req.body

  try {
    const user = await userModel.findOne({ email })

    if (!user) {
      return res.json({ success: false, message: 'User does not exixts' })

    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid credentials' })
    }

    const token = createToken(user._id)
    res.json({ success: true, token })
  }
  catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })

  }

}

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY)
}

const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await userModel.findOne({ email })
    if (user) {
      return res.json({ success: false, message: 'User already exixts' })
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Please enter valid email id' })
    }

    if (password.length < 8) {
      return res.json({ success: false, message: 'Please enter strong password' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashed
    })

    const userData = await newUser.save()
    const token = createToken(userData._id)
    res.json({ success: true, token })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

export { loginUser, registerUser }