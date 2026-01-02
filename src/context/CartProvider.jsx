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
    return (
        <CartContext.Provider value={{addToCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider