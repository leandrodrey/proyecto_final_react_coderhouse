import React, {createContext, useReducer} from 'react';
import cartReducer, {cartInitialState} from "../reducers/cartReducer";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    return (
        <CartContext.Provider value={{ cart:state, dispatch }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
