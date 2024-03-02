import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'; // Archivo CSS para estilos
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productsRef = collection(db, 'products');
      const q = query(productsRef, where("id", "==", parseInt(id)));


      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setProduct(doc.data());
          });
        } else {
          console.error('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{product.nombre}</h1>

      <div className='product-list-container'>
      <div className='product-container'>
        <img src={require(`../../imgs/${product.url}`)} alt={product.nombre} />
      </div>
      <div className='detailsContainer'>
      <p>id: {product.id}</p>
      <p>Precio: {product.precio}</p>
      <div>
        {quantityAdded > 0 ? (
          <div>
            <Link to="/cart" className='option'>Terminar Compra</Link>
            <Link to="/" className='option'>Seguir Comprando</Link>
          </div>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
        )}
      </div>
      </div>
      </div>


    </div>
  );
};

export default ProductDetail;
