import React, { useEffect, useState } from 'react'
import { CartContext } from './CartContext';

const initialCart = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []
}
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    }
    const clearCartItems = () => {
        localStorage.setItem('cart', JSON.stringify([]));
        setCart([])
    }
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    }

    const decreaseProduct = (product)=>{
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
    })
        console.log(product)
    }
    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    return (
        <CartContext.Provider value={{ addToCart, clearCartItems, removeFromCart, cart, decreaseProduct,totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider