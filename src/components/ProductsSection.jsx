import React from 'react'
import { productsData } from '../../data'
import ProductCard from './ProductCard'

const ProductsSection = () => {
    return (
        <div className='mx-[5%]'>

            <h2 className='text-3xl font-bold pt-5 text-center'>Scent Store Products</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3'>
                {productsData.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>

        </div>
    );
}

export default ProductsSection