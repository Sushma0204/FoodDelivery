import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({})
  const [token, setToken] = useState("")
  const [foodItems, setFoodItems] = useState([])
  const url = 'https://fooddelivery-backend-vepa.onrender.com'

  const addToCart = async (id) => {
    id = id.toString()
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }))
    } else {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }

    if(token){
      await axios.post(url + "/api/cart/add", { itemId: id }, { headers: { token } })

    }
  }

  const removeFromCart = async (id) => {
    id = id.toString()
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }))

    if(token){
      await axios.post(url + "/api/cart/remove", { itemId: id }, { headers: { token } })

    }
  }

  const totalAmount = () => {
    let total = 0
    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        let itemInfo = foodItems.find((food) => food._id?.toString() === itemId)
        if (itemInfo) {
          total += itemInfo.price * cartItem[itemId]
        }
      }
    }
    return total
  }

  const loadCartData = async (token) => {
    try {
    const res = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    setCartItem(res.data.cartData);
  } catch (error) {
    console.error("Failed to load cart data:", error)
  }
  }

  const getFoodListItems = async () => {
    try {
    const res = await axios.get(url + "/api/food/list")
    setFoodItems(res.data.data);
  } catch (error) {
    console.error("Failed to fetch food items:", error)
  }
  }

  useEffect(() => {
    async function loadData() {
      await getFoodListItems()
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData()
  }, [])

  const contextValue = {
    foodItems,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    totalAmount,
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
