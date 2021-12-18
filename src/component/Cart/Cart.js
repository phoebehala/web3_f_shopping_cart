import React from 'react'
import { Wrapper } from './CartStyle.js';

// redux
import { useSelector, useDispatch } from 'react-redux';

// component
import CartItem from '../CartItem/CartItem';


const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems);

    const calculateTotal = (items)=> 
    // set accumulator to 0 initially
      items.reduce( (accumulator, item)=> accumulator + item.quantity*item.price, 0)
   

    return (
        <div>
            <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 
                ? <p>No items in cart.</p> 
                : cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}

                    />
                ))}

            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            </Wrapper>
        </div>
    )
}

export default Cart
