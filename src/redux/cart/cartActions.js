import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './cartTypes'

export const addItemAction = (item) => ({ 
    type: ADD_CART_ITEM, 
    payload: item 
})

export const removeItemAction =  (item) => ({ 
    type: REMOVE_CART_ITEM, 
    payload: item
})