import React from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from './ProductsCard';


const ProductsList = () => {
    const Products = useSelector(state => state.productsReducer.Products)
  return (
    <div className='product--list'>
        {Products.map(product => <ProductsCard product={product} key={product._id} />)}
    </div>
  )
}

export default ProductsList