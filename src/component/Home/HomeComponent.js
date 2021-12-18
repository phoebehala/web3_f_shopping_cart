// css
import './Home.scss'

import React, { useState }  from 'react';

import HomeContainer from './HomeContainer';
import ShopCard from '../ShopCard/ShopCard';


const Home = ({homeProps}) => {
    console.log(homeProps);
    console.log(homeProps.collections);

    return (
        <div >
            <div className="banner-img"></div>
            <div className="shop-wrapper">
                <div className="shop-list">
                    <h2>shops</h2>
                    <div className="shop-container">
                    
                    {
                        homeProps.collections && homeProps.collections.map((shop, id)=>{
                            //console.log(shop, id)
                            return(
                                <ShopCard key={id} data={shop} />  
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
