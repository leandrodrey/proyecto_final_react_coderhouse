import React, {createContext, useEffect, useState} from 'react';
import {getCartFromSessionStorage, saveCartInSessionStorage} from "../helpers/SessionStorage";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCartFromSessionStorage('cart') && setCart(getCartFromSessionStorage('cart'));
    }, []);

    const addCart = (item) => {
        let localCart;
        if (checkIfItemExistInCart(item.id)) {
            localCart = updatedCart(item)
        } else {
            localCart = [...cart, item]
        }
        setCart(localCart);
        saveCartInSessionStorage('cart', localCart);
    };

    const updatedCart = (item) => cart.map((cartItem) => {
        if (cartItem.id === item.id) {
            return {
                ...cartItem,
                count: cartItem.count + item.count
            };
        }
        return cartItem;
    });

    const checkIfItemExistInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const getTotalPaymentFromCart = () => {
        return cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
    };

    const removeItemFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        saveCartInSessionStorage('cart', updatedCart);
    }

    const removeAllItemsFromCart = () => {
        setCart([]);
        saveCartInSessionStorage('cart', []);
    }

    return (
        <CartContext.Provider value={{cart, setCart, addCart, getTotalPaymentFromCart, removeItemFromCart, removeAllItemsFromCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
