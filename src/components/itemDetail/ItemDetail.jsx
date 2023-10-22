import React, { useState } from 'react'
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ( {item} ) => {

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {cantidad > 1 && setCantidad(cantidad - 1)}
  const handleSumar = () => {setCantidad(cantidad + 1)}

  const handleAgregar = () => {
    console.log({...item, cantidad})
}

  return (
    <div className='itemDetail-container'>
        <div className='detalle'>
            <img src={item.imagen} alt={item.titulo} />
            <div className='detalle-texto'>
                <h3>{item.titulo}</h3>
                <p>Categoria: {item.categoria}</p>
                <p className='descripcion'>Descripcion: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                <p>Precio: ${item.precio}</p>
                <ItemCount cantidad = {cantidad} 
                           handleSumar = {handleSumar} 
                           handleRestar={handleRestar}
                           handleAgregar={handleAgregar}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail