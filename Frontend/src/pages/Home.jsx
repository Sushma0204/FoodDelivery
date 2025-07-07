import React, { useState } from 'react'
import Header from '../components/Header'

import ExploreMenu from '../components/ExploreMenu.jsx'
import FoodItems from '../components/FoodItems.jsx'


const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodItems category={category} />
    </div>
  )
}

export default Home