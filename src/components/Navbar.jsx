import { ShoppingCart, Lock } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to={'/'} className="logo">NovaMart</Link>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Products</Link></li>
                <li><Link to={'/cart'}><ShoppingCart /></Link></li>
                <li><Link to={'/login'}>Login<Lock /></Link></li>
            </ul>
        </div>
    )
}

export default Navbar