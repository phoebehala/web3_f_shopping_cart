import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './cartTypes'

//initial state
const INITIAL_STATE = {
  cartItems: [],
  numOfItems:0,
  hidden: true,
}


//reducer function
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }   

        default:
            return state
    }
  }
  
  export default cartReducer




const addItemToCart　= (cartItems, cartItemToAdd) =>{

    console.log('cartItemToAdd', cartItemToAdd.id);

    // 1. Is the item already added in the cart?
    const insideItemInCart = cartItems.find( item => item.id === cartItemToAdd.id)
    console.log(insideItemInCart);

    if(insideItemInCart){
        return cartItems.map(item => 
          item.id === cartItemToAdd.id ?
 
          //  ...item >>> copy all properties of item
          //   quantity: item.quantity + 1 >>> update quantity property by one
          { ...item, quantity: item.quantity + 1} 
          : 
          item
         )
      }
    // 2. if that is the first time the item is added
    return [...cartItems, {...cartItemToAdd, quantity: 1} ]
    
}

const removeItemFromCart　= (cartItems, cartItemToRemove) =>{

    //console.log('jj');
    //console.log('cartItemToRemove', cartItemToRemove.id);

    const existingCartItem = cartItems.find( item => item.id === cartItemToRemove.id)
    
    if (existingCartItem){
      // if only have one item in the cart, remove it from cartItems
      if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
      }
    }

    return cartItems.map(cartItem => 
      cartItem.id === cartItemToRemove.id ? 
      {...cartItem, quantity: cartItem.quantity - 1} 
      : 
      cartItem
  )
    

/*
    cartItems.reduce( (accumulator, item) =>{
        if (item.id === cartItemToRemove.id){
          if(item.quantity === 1) return accumulator;  // skip this item which means remove it from the array
          return [...accumulator, {...item, quantity : item.quantity - 1} ]
        }
        return [...accumulator, item];  // add the item which we don't want to remove
    
      }, 0 )
*/
      
}
  