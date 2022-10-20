import React from 'react'
import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar'
import ProductsList from '../../Components/Products/ProductsList'

const Home = () => {
  return (
    <>
        <ResponsiveAppBar />
        <ProductsList />
    </>
  )
}

export default Home