import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
  const {token} = req.headers
  if(!token){
    return res.json({success: false, message: "Not Authorized, Please Login again!"})

  }
  try{
    const decode = jwt.verify(token, process.env.JWT_KEY)
    req.body.userId = decode.id
    next()
  }catch (error) {
    console.log(error)
    return res.json({success: false, message: "Error"})

  }

}

export default authMiddleware