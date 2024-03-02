import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    getTotalPrice: () => 0
});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) =>{
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
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

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
