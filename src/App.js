//App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import NavBar from './components/navbar/NavBar';

import Products from './components/home/Products';
import ProductDetail from './components/home/ProductDetail';  // Asegúrate de tener este import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';

function App() {
  return (
    
      <div className="App">

        <Router>
          <CartProvider>
            <NavBar />

            <Routes>

              <Route path='/' element={ <Products/>}/>
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/home/products/:categoryId" element={<Products />} />
              <Route path='/cart' element={ <Cart/>}/>
              <Route path='/checkout' element={ <Checkout/>}/>

            </Routes>
          </CartProvider>
        </Router>

      </div>

  );
}


export default App;
