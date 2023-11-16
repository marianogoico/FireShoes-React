import React, { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("")

    useEffect(() => {

        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef

        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    }),
                categoria ? setTitulo(categoria) : setTitulo("Todos los productos")
                )
            })

    }, [categoria])
    

    return (
        <div className='item-list-container'>
            <ItemList productos = {productos} titulo={titulo} />
        </div>

    )

}

export default ItemListContainer