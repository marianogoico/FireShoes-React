import React, { useContext, useState } from 'react'
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ( {item} ) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext); 
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);
  const handleRestar = () => {cantidad > 1 && setCantidad(cantidad - 1)}
  const handleSumar = () => {setCantidad(cantidad + 1)}
  


  return (
    <div className='itemDetail-container'>
        <div className='detalle'>
            <img src={item.imagen} alt={item.titulo} />
            <div className='detalle-texto'>
                <h3>{item.titulo}</h3>
                <p><span>Categoria:</span>{item.categoria}</p>
                <p className='descripcion'><span>Descripcion:</span>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                <p>${item.precio}</p>
                <ItemCount cantidad = {cantidad} 
                           handleSumar = {handleSumar} 
                           handleRestar={handleRestar}
                           handleAgregar={() => {agregarAlCarrito(item,cantidad)}}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail