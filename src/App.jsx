import React from 'react';
import SiteRoutes from "./routes/SiteRoutes";
import CartProvider from "./context/CartProvider";
import ProductProvider from "./context/ProductProvider";
import LoaderProvider from "./context/LoaderProvider";
import OrderProvider from "./context/OrderProvider";

function App() {
    return (
        <React.Fragment>
            <LoaderProvider>
                <ProductProvider>
                    <CartProvider>
                        <OrderProvider>
                            <SiteRoutes/>
                        </OrderProvider>
                    </CartProvider>
                </ProductProvider>
            </LoaderProvider>
        </React.Fragment>
    )
}

export default App;
