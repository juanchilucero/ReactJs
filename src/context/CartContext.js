import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) =>{
        // Comprobamos si el producto ya está en el carrito
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Si el producto ya está en el carrito, actualizamos su cantidad
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            // Si el producto no está en el carrito, lo agregamos con los detalles requeridos
            setCart(prev => [...prev, { id: item.id, name: item.nombre, price: item.precio, quantity }]);
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart= ()=> {
        setCart([])
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
