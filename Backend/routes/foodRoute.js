import express from "express"
import multer from "multer"
import {addFood} from '../controllers/foodController.js'
import { listAllFoodItems } from "../controllers/foodController.js"
import { removeFoodItem } from "../controllers/foodController.js"


const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({storage: storage})
const foodRouter = express.Router()

foodRouter.post('/add' , upload.single("image"), addFood)
foodRouter.get('/list', listAllFoodItems)
foodRouter.post('/remove', removeFoodItem)

export default foodRouter