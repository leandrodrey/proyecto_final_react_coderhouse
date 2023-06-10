import React, {createContext} from 'react'
import useFirebase from "../hooks/useFirebase";

export const OrderContext = createContext('')

const OrderProvider = ({children}) => {

    const { order } = useFirebase();

    return (
        <OrderContext.Provider value={{ order }}>
            {children}
        </OrderContext.Provider>
    )

}
export default OrderProvider;
