import {getCartFromSessionStorage, saveCartInSessionStorage} from "../helpers/SessionStorage";

const storedCart = getCartFromSessionStorage('cart');

export const cartInitialState = {
    items: storedCart ? storedCart.items : [],
    totalPayment: storedCart ? storedCart.totalPayment : 0
};

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
    REMOVE_ALL_ITEMS_FROM_CART: 'REMOVE_ALL_ITEMS_FROM_CART'
};

const cartReducer = (state, action) => {

    const {type: actionType, payload: actionPayload} = action;

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            const checkIfItemExistInCart = () => {
                return state.items.some((item) => item.id === actionPayload.id);
            }
            const updatedCart = () => state.items.map((cartItem) => {
                if (cartItem.id === actionPayload.id) {
                    return {
                        ...cartItem,
                        count: cartItem.count + actionPayload.count
                    };
                }
                return cartItem;
            });
            let newCart;
            if (checkIfItemExistInCart()) {
                newCart = updatedCart()
            } else {
                newCart = [...state.items, actionPayload]
            }
            const totalPayment = newCart.reduce((total, item) => total + item.price * item.count, 0);
            const finalCart = {
                ...state,
                items: newCart,
                totalPayment: totalPayment
            };
            saveCartInSessionStorage('cart', finalCart);
            return finalCart;
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            const newCartRemove = state.items.filter((item) => item.id !== actionPayload.id)
            const totalPaymentRemove = newCartRemove.reduce((total, item) => total + item.price * item.count, 0);
            const finalCartRemove = {
                ...state,
                items: newCartRemove,
                totalPayment: totalPaymentRemove
            };
            saveCartInSessionStorage('cart', finalCartRemove);
            return finalCartRemove;
        case CART_ACTION_TYPES.REMOVE_ALL_ITEMS_FROM_CART:
            saveCartInSessionStorage('cart', []);
            return [];
        default:
            return state;
    }
}

export default cartReducer;
