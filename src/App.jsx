import React from 'react';
import SiteRoutes from "./routes/SiteRoutes";
import CartProvider from "./context/CartProvider";
import ProductProvider from "./context/ProductProvider";
import LoaderProvider from "./context/LoaderProvider";
import AlertBarProvider from "./context/AlertBarProvider";

function App() {
    return (
        <React.Fragment>
            <LoaderProvider>
                <ProductProvider>
                    <AlertBarProvider>
                        <CartProvider>
                            <SiteRoutes/>
                        </CartProvider>
                    </AlertBarProvider>
                </ProductProvider>
            </LoaderProvider>
        </React.Fragment>
    )
}

export default App;
