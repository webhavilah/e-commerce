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
    const clearCartItem = ()=>{
        localStorage.setItem('cart', JSON.stringify([]));
        setCart([])
    }
    return (
        <CartContext.Provider value={{addToCart, clearCartItem, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider