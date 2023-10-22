import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/productos" className='Logo'><h1>FireShop</h1></Link>
        <ul className='menu'>
            <li><Link to="/productos/Zapatillas" className='links-navbar'>Zapatillas</Link></li>
            <li><Link to="/productos/Ropa" className='links-navbar'>Remeras</Link></li>
            <li><Link to="/productos/Gorras" className='links-navbar'>Gorras</Link></li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar