import React from 'react'
import { productsData } from '../../data'
import ProductCard from './ProductCard'

const ProductsSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 mx-[5%]'>
            {productsData.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
    )
}

export default ProductsSection