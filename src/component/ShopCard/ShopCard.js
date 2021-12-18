import React from 'react';
import './ShopCard.scss';
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux'
import { addItemAction } from '../../redux/cart/cartActions'


const ShopCard = ( {data} ) => {
    console.log(data);
    const dispatch = useDispatch()

    return (
        <div className="card-item">
            <Link to={`/shop/${data.id}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.imageUrl} alt={data.name} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{data.name}</h4>
                            <p>${data.price}</p>       
                        </div>
                    </div>
                </div>
            </Link>
            <div className="material-ui-button" >
                <Button onClick={() => {dispatch(addItemAction(data))}} variant="outlined" color="primary" >Add to cart</Button>
                {/* <Button onClick={() => console.log(data)} variant="outlined" color="primary" >Add to cart</Button> */}
            </div>
        </div>
    )
}

export default ShopCard
