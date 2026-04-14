import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const CartBtn = () => {
    return (
        <>
            <Link to={'/cart'}>
                <li className='bg-blue-700 text-white px-2.5 py-2.5 rounded-md relative'>
                    <span className='bg-red-800 text-white rounded-full absolute top-[-6px] right-[-6px] flex items-center justify-center h-5 w-5 text-sm'>5</span>
                    <ShoppingCart />
                </li>
            </Link>
        </>
    )
}

export default CartBtn