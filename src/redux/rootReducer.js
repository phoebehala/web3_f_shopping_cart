import { combineReducers } from 'redux'

import myShopReducer from './myShop/myShopReducer';
import cartReducer from './cart/cartReducer'


const rootReducer = combineReducers({

    myShop: myShopReducer,
    cart:cartReducer,
   
})

export default rootReducer
