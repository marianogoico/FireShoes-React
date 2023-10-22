import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div>
      <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          </Routes>

      </BrowserRouter>
    </div>
    
  );
}

export default App;
