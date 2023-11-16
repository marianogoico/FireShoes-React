import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './checkout.css'

const Chekout = () => {

  const [pedidoId, setPedidoId] = useState("");
  
  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
  
  const {register, handleSubmit} = useForm()

  const comprar = (data) => {

    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
    }
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();
      })
  }

  if (pedidoId) {
    return(
      <div className='codigo-container'>
        <h1>Gracias por tu compra</h1>
        <p>Tu codigo de pedido es: {pedidoId}</p>
      </div>
    )
  }

  return (
    <div className='form-container'>

      <h1>Checkout</h1>

      <form className='form' onSubmit={handleSubmit(comprar)}>

        <input type="text" placeholder='Ingrese su nombre y apellido' {...register("nombre")}/>
        <input type="email" placeholder='Ingrese su correo' {...register("correo")}/>
        <input type="phone" placeholder='Ingrese su numero de telefono' {...register("telefono")} />

        <button type='submit'>Comprar</button>
      </form>
    </div>
  )
}

export default Chekout