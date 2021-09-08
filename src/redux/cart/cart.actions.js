import CartAcationTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartAcationTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartAcationTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartAcationTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartAcationTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});