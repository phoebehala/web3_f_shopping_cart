import MYSHOP_DATA from "../../assets/data/myShop";


const INITIAL_STATE = {
    collections: MYSHOP_DATA,
    isFetching: false,
    errorMessage: undefined,
  }


const myShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    default:
      return state
  }
}

export default myShopReducer