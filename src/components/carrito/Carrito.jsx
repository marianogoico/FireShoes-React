import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './carrito.css'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='cart-container'>
            <h1>Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className='product-container'>
                        <img src={prod.imagen} alt="" />
                        <div className="product-info">
                            <h3>{prod.titulo}</h3>
                            <p>Precio unitario: ${prod.precio}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                        </div>
                    </div>
                ))
            }

            {carrito.length > 0 ?
            <div className='cart-info'>
                <h2 className='cart-total'>Total: ${precioTotal()}</h2>
                <Link to= "/checkout"><button>Finalizar Compra</button></Link>
                <button onClick={handleVaciar} className='cart-button'>Vaciar</button> 
            </div> :
            <h2>El carrito esta vacio</h2>            
            }
        </div>
    )
}

export default Carrito