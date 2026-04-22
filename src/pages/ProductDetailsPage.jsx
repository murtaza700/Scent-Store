import React, { useState, useEffect } from 'react';
import { productsData } from '../../data';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const index = Number(id);
  const [product, setProduct] = useState();

  useEffect(() => {
    const filterProduct = productsData[index];
    setProduct(filterProduct);
    console.log(product);
  }, [id]);


  if (!product) {
    return <div className='w-full h-[calc(100vh-70px)] flex items-center justify-center'>
      <div className="mr-3 size-10 animate-spin border-4 border-blue-700 rounded-full border-t-transparent"></div>
    </div>;
  }

  return (
    <div className='relative flex items-start justify-start flex-col md:flex-row'>

      <div className='left w-1/2'>
        <img src={product.image} alt="Product Image" />
      </div>

      <div className='right w-1/2'>
        <h1 className='text-4xl font-medium'>{product.name}</h1>
        <p>{product.description}</p>
      </div>

    </div>
  )
}

export default ProductDetailsPage