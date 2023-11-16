import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Carrito from './components/carrito/Carrito.jsx';
import Chekout from './components/checkout/Checkout.jsx';


function App() {

    return (
      <div>
        <CartProvider>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/checkout" element={<Chekout/>}/>
              </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
      
    );
}

export default App;
