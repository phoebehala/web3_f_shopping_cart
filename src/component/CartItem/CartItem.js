import React from 'react'

// Styles
import { Wrapper } from './CartItemStyle';

// @material-ui
import {Button} from '@material-ui/core';

// redux
import { useDispatch } from 'react-redux'
import {removeItemAction, addItemAction} from '../../redux/cart/cartActions'


const CartItem = ( {item} ) => {
    const dispatch = useDispatch()
   
    return (
        <Wrapper>
        
        <div>
            <h3>{item.name}</h3>
            <div className='information'>
                <p>price: $ {item.price}</p>
                <p>Total: $ { (item.quantity*item.price).toFixed(2) } </p>
            </div>
        

            <div className='buttons'>
            < Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => {dispatch(removeItemAction(item))}}
                   
                >
                -
            </Button>
            
            <p>{item.quantity}</p>
            
            <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => {dispatch(addItemAction(item))}}
                >
                +
            </Button>
            </div>
        </div>
        
        <img src={item.image} alt={item.title} />
      
    </Wrapper>
    )
}

export default CartItem
