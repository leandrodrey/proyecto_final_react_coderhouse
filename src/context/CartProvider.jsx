import React, {createContext, useReducer} from 'react';
import cartReducer, {cartInitialState} from "../reducers/cartReducer";
import {getTotalPayment} from "../helpers/CartHelper";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const getTotalPaymentFromCart = () => {
        return getTotalPayment(state);
    };

    return (
        <CartContext.Provider value={{cart:state, dispatch, getTotalPaymentFromCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
