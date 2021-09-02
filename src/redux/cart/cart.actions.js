import CartAcationTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartAcationTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartAcationTypes.ADD_ITEM,
    payload: item
});