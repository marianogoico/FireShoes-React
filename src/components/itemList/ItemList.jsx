import React from 'react'
import './itemList.css'
import Item from '../item/Item'


const ItemList = ( {productos, titulo} ) => {


  return (
    <div className='itemlist-container'>
        <h2 className='main-tittle'>{titulo}</h2>
        <div className="productos">
            { productos.map((prod) => <Item producto = {prod} key={prod.id}/>) }
        </div>
    </div>
  )
}

export default ItemList