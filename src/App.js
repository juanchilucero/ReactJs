//App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/navbar/ItemListContainer';
import Products from './components/home/Products';
import ProductDetail from './components/home/ProductDetail';  // Asegúrate de tener este import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">

        <Router>
        <NavBar />
        <ItemListContainer greeting="¡Hola! Bienvenido a la tienda." />

          <Routes>

          <Route path='/' element={ <Products/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/home/products/:categoryId" element={<Products />} />

          </Routes>
        </Router>

      </div>

  );
}


export default App;
