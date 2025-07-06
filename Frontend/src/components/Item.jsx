import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItems from './FoodItems'

const Item = () => {

  const { foodItems } = useContext(StoreContext)
  return (
    <div>
      <FoodItems category="All" />



    </div>
  )
}

export default Item