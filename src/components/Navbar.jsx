import { ShoppingCart, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartBtn from './CartBtn'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='px-[5%] py-3 bg-white shadow-md'>
            <div className='flex items-center justify-between'>

                <Link to='/' className="font-bold text-2xl text-blue-700">
                    NovaMart
                </Link>

                <ul className='hidden md:flex items-center gap-6'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Products</Link></li>
                    <CartBtn />
                    <li><Link to='#'>Login</Link></li>
                </ul>

                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className='md:hidden flex flex-col gap-4 mt-4 bg-white p-4 rounded-xl shadow-lg'>
                    <li><Link to='/' onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to='/' onClick={() => setIsOpen(false)}>Products</Link></li>
                    <li onClick={() => setIsOpen(false)}><CartBtn /></li>
                    <li><Link to='#' onClick={() => setIsOpen(false)}>Login</Link></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar