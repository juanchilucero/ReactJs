import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'; // Archivo CSS para estilos
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../context/CartContext';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity);

    addItem(product, quantity);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://65bea7fddcfcce42a6f2cbbc.mockapi.io/api/v1/products');
        const data = await response.json();

        // Busca el producto por su ID
        const selectedProduct = data.find((product) => product.id === id);

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{product.nombre}</h1>
      <div className='product-container'>
      <img src={require(`../../imgs${product.url}`)} alt={product.nombre} />
      </div>
      <p>id: {product.id}</p>
      <p>Precio: {product.precio}</p>
      {/* Agrega más detalles según la estructura de tu objeto de producto */}
      <div>
        {
          quantityAdded > 0 ? (
            <div>
            <Link to="/cart" className='option'>Terminar Compra</Link>
            <Link to="/" className='option'>Seguir Comprando</Link>
            </div>

          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
          )
        }
      </div>

    </div>
  );
};

export default ProductDetail;

