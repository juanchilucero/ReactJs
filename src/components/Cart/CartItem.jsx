import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);
    const subtotal = price * quantity;

    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${subtotal}</p>
            <button onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;
