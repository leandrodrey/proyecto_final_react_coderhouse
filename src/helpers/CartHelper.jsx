export const getTotalPayment = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
};