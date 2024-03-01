import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'; // Archivo CSS para estilos
import { getFirestore, collection, query, where, getDocs, limit } from 'firebase/firestore';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      let productsCollection = collection(db, 'products');
      
      // Si hay un categoryId, aplicamos el filtro de categoría
      if (categoryId) {
        const q = query(productsCollection, where('categoria', '==', categoryId), limit(10));
        try {
          const querySnapshot = await getDocs(q);
          const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      } else {
        try {
          const querySnapshot = await getDocs(productsCollection);
          const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    };

    fetchProducts();
  }, [categoryId]);

  console.log("Renderizando productos:", products);

  return (
    <div>
      <h1>Productos</h1>
      <div className='product-list-container'>
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="product-container">
              <img src={require(`../../imgs/${product.url}`)} alt={product.nombre} />
              <p>{product.nombre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
 
