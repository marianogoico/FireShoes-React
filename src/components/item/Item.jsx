import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {
  return (
    <div className='item'>
        <img src={producto.imagen} alt={producto.id} />
        <div className='info-container'>
            <h3>{producto.titulo}</h3>
            <p>Precio: ${producto.precio}</p>
            <Link className='ver-mas' to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item