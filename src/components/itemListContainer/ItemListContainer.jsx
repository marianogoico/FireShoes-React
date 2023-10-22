import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import {pedirDatos} from '../../funciones/pedirDatos'
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("Nuestros Productos")

    useEffect(() => {
      pedirDatos()
        .then((res) => {
            if (categoria){
                setProductos(res.filter((prod)=> prod.categoria === categoria));
                setTitulo(categoria);
            }
            else {
                setProductos(res);
                setTitulo("Nuestros Productos")
            }
        })
    }, [categoria])
    

    return (
        <div className='item-list-container'>
            <ItemList productos = {productos} titulo={titulo} />
        </div>

    )

}

export default ItemListContainer