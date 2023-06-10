import React, {createContext} from 'react'
import useFirebase from "../hooks/useFirebase";

export const ProductContext = createContext('')

const ProductProvider = ({children}) => {

    const {products, product, getProductById, getProductsByCategoryId, getProducts, handleSubmit} = useFirebase();

    return (
        <ProductContext.Provider value={{products, product, getProductById, getProductsByCategoryId, getProducts, handleSubmit}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider;

/*
    1) Tiene que estar deployado (los proyectos de GitHub que ustedes deje como proyecto final tiene que tener la url del despliegue )
    2) es el diseño - proyectos sin diseño o mal presentado
    3) Responsive
    4) es la lógica del proyecto
    5) validar datos del formulario, deshabilitar el boton de send si no esta todo completo
    6) NINGUN CONSOLE LOG
*/
