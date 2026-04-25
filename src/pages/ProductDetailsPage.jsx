import React, { useState, useEffect } from 'react';
import { productsData } from '../../data';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { increment } from '../features/counterSlice';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();

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
    <div className='relative flex items-center justify-start flex-col gap-5 md:flex-row px-[7%] md:px-[7%] mx-auto mt-8'>

      <div className='left md:w-[40%] w-full'>
        <img className='w-full' src={product.image} alt="Product Image" />
      </div>

      <div className='right md:w-[50%] w-full'>
        <h1 className='text-4xl font-[600] mb-3'>{product.name}</h1>
        <p className=''>{product.description}</p>

        <div className="btns mt-3">
          <button className='flex items-center justify-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-md cursor-pointer' onClick={() => dispatch(increment())}>Add To Cart <ShoppingCart /></button>
        </div>

      </div>


    </div>
  )
}

export default ProductDetailsPage