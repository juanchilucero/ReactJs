import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Asegúrate de importar correctamente tu contexto
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de items en el carrito sumando las cantidades de cada item
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart"> {/* Utiliza Link para crear un enlace a /cart */}
        <img src={require('../../imgs/carrito.png')} alt="Carrito de compras" className="cart-icon" />
        {totalItems > 0 && <span className="badge bg-secondary">{totalItems}</span>} {/* Mostrar la cantidad solo si hay items en el carrito */}
      </Link>

    </div>
  );
};

export default CartWidget;
