import React, { useEffect, useState } from 'react'
import { CartContext } from './CartContext';

const initialCart = ()=>{
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []
}
const CartProvider = ({children}) => {
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);

    const addToCart =(item)=>{
        setCart((prev) => [...prev, item]);
    }
    const clearCartItems = ()=>{
        localStorage.setItem('cart', JSON.stringify([]));
        setCart([])
    }
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    }
    return (
        <CartContext.Provider value={{addToCart, clearCartItems, removeFromCart,  cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider