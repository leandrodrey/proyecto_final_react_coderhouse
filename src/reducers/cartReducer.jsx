import {getCartFromSessionStorage, saveCartInSessionStorage} from "../helpers/SessionStorage";

export const cartInitialState = getCartFromSessionStorage('cart') || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
    REMOVE_ALL_ITEMS_FROM_CART: 'REMOVE_ALL_ITEMS_FROM_CART'
};

const cartReducer = (state, action) => {

    const {type: actionType, payload: actionPayload} = action;

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            const updatedCart = () => state.map((cartItem) => {
                if (cartItem.id === actionPayload.id) {
                    return {
                        ...cartItem,
                        count: cartItem.count + actionPayload.count
                    };
                }
                return cartItem;
            });
            const checkIfItemExistInCart = () => {
                return state.some((item) => item.id === actionPayload.id);
            }
            let newCart;
            if (checkIfItemExistInCart()) {
                newCart = updatedCart()
            } else {
                newCart = [...state, actionPayload]
            }
            saveCartInSessionStorage('cart', newCart);
            return newCart;
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return state.filter((item) => item.id !== actionPayload);
        case CART_ACTION_TYPES.REMOVE_ALL_ITEMS_FROM_CART:
            saveCartInSessionStorage('cart', []);
            return [];
        default:
            return state;
    }
}

export default cartReducer;
