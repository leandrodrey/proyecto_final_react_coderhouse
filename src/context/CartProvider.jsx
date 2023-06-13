import React, {createContext, useReducer, useState} from 'react';
import {Alert, Slide, Snackbar} from "@mui/material";
import {cartInitialState, cartReducer} from "../reducers/cart";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);

    const addCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    });

    const removeItemFromCart = (product) => dispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: product
    });

    const removeAllItemsFromCart = () => dispatch({
        type: 'REMOVE_ALL_ITEMS_FROM_CART',
    });

    const getTotalPaymentFromCart = (product) => dispatch({
        type: 'GET_TOTAL_PAYMENT_FROM_CART',
        payload: product
    });

    const hideAddedToCartMessage = () => {
        setShowAddedToCartMessage(false);
    };

    return (
        <CartContext.Provider value={{cart:state, addCart, getTotalPaymentFromCart, removeItemFromCart, removeAllItemsFromCart}}>
            {children}
            <Snackbar open={showAddedToCartMessage} autoHideDuration={1000} onClose={hideAddedToCartMessage} TransitionComponent={Slide} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={hideAddedToCartMessage} severity="success">
                    Product added to cart!
                </Alert>
            </Snackbar>
        </CartContext.Provider>
    )

}
export default CartProvider;
