import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import CartBtn from './CartBtn'

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between px-[5%] py-3 bg-white shadow-md'>

                <Link to={'/'} className="logo font-bold text-2xl text-blue-700">NovaMart</Link>

                <ul className='flex items-center justify-center gap-5'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Products</Link></li>
                    <CartBtn />
                    <li><Link to={'#'}>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar