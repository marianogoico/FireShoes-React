import React, { useState, useEffect } from 'react'
import { pedirItem } from '../../funciones/pedirDatos';
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)    
    const id = useParams().id;  


    useEffect(() => {
        pedirItem(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])

    return (
        <div className='detail-container'>
            {item && <ItemDetail item={item} />}
        </div>
    )
    }

export default ItemDetailContainer