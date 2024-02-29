import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = ()=> {

    const { cart, clearCart, total } = useContext(CartContext);

    if (cart.length === 0) {
        return(
            <div>
                <h1>El Carrito Está Vacío</h1>
                <Link to="/" className="Option">Ver Productos</Link>
            </div>
        )
    }
    return(
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    )
}

export default Cart;
