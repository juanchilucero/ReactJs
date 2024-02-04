import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'; // Archivo CSS para estilos

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://65bea7fddcfcce42a6f2cbbc.mockapi.io/api/v1/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  console.log("Renderizando productos:", products);

  return (
    <div>
      <h1>Productos</h1>
      <div className='product-list-container'>
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="product-container">
            <img src={require(`../../imgs${product.url}`)} alt={product.nombre} />
              <p>{product.nombre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
