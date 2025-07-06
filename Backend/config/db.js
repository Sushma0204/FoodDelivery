import mongoose from "mongoose"

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://sushmaud7:20010191@cluster0.xbufsdw.mongodb.net/food-del').then(() => console.log("Database Connected Succesfully"))

}