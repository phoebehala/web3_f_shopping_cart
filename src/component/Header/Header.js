import React, { useState }  from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import user from "../../images/user.png";

// components
import  AddShoppingCartIcon  from '@material-ui/icons/AddShoppingCart';
import { Badge, IconButton } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import Cart from '../Cart/Cart';

// redux
import {useSelector} from 'react-redux'

const Header = () => {

    const [cartOpen, setCartOpen ] = useState(false);

    const cartItems = useSelector(state => state.cart.cartItems);

    const getTotalItems = (items) => 
    // accumulator >>> total number in the cart
    // The reduce() method executes a reducer function for each value of an array. 
    // reduce() returns a single value which is the function's accumulated result.
    // reduce( callbackFuc, initial value)
    items.reduce( (accumulator, item) => accumulator + item.quantity  ,0)


    return (
      <div className="header">
        <Link to="/">
          <div className="logo">Shopping App</div>
        </Link>

        <Drawer anchor='left' open={cartOpen} onClose={()=>setCartOpen(false)}>
            <Cart />
        </Drawer>
      
        
        <IconButton onClick={() =>setCartOpen(true)} color="primary" aria-label="add to shopping cart">
            <Badge badgeContent={getTotalItems(cartItems)}  color='error'>
                <AddShoppingCartIcon /> 
            </Badge>
        </IconButton>
        
  
      </div>
    );
  };

export default Header
