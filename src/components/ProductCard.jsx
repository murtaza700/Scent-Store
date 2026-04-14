import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const ProductCard = ({ product }) => {

    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='max-w-[300px] bg-gray-300 p-5 rounded-md m-2 mx-auto relative'>
            <img className='hover:scale-120 cursor-pointer transition-all duration-300' src={product.image} alt="product image" loading='lazy' />

            <div className="text flex items-start justify-start flex-col gap-3">
                <div className='flex items-center justify-between w-full'>
                    <h1 className='text-2xl font-semibold'>{product.name}</h1>
                    <span>{product.price}</span>
                </div>
                <p className='text-sm mb-3'>{product.description.slice(0, 100)}...</p>
            </div>
            <Link className='flex items-center justify-center gap-2 bg-blue-700 text-white w-full py-2 rounded-md' to={`/product/1`}>Cart <ShoppingCart /></Link>

            <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => setIsLiked(!isLiked)}
                className='absolute right-5 top-5 bg-red-600/20 text-red-600 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer'
            >
                {
                    isLiked
                        ?
                        <Heart size={20} fill='red' />
                        :
                        <Heart size={20} />
                }
            </motion.button>

        </div>
    )
}

export default ProductCard