import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useDispatch } from 'react-redux'
import { increment } from '../features/counterSlice'

const ProductCard = ({ product, index }) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='max-w-[300px] bg-gray-300 p-5 rounded-md m-2 mx-auto relative flex flex-col items-start justify-between'>
            <Link to={`/product/${index}`}>
                <img className='hover:scale-120 cursor-pointer transition-all duration-300' src={product.image} alt="product image" loading='lazy' />
            </Link>

            <div className="text flex items-start justify-start flex-col gap-3 mt-5">

                <Link to={`/product/${index}`}>
                    <h1 className='text-[20px] font-semibold'>{product.name.slice(0, 30)}{product.name.length > 30 && '...'}</h1>
                </Link>

                <span>{product.price}</span>
                <p className='text-sm mb-3'>{product.description.slice(0, 100)}...</p>
            </div>

            <button onClick={() => dispatch(increment())} className='flex items-center justify-center gap-2 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white w-full py-2 rounded-md transition-colors duration-300'>Cart <ShoppingCart /></button>

            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLiked(!isLiked)}
                className='absolute right-4 top-4 bg-red-600/10 text-red-600 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer'
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