// css
import './ShopDetail.scss'

import React, { useEffect }  from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";


function ShopDetail() {
    const { id } = useParams();
    //console.log(id);

    const myShops = useSelector(state=>state.myShop.collections)
    console.log(myShops);

    const product = myShops.filter((myShop)=>myShop.id===parseInt(id))
    //const product = myShops.filter((myShop)=>console.log(myShop.id===parseInt(id)))
    console.log(product);
    console.log(product[0].name);

    return (
         

        <div className="shop-section">
        {/* <h2>ShopDetail {id}</h2> */}
       
          <div className="section-left">
            <div className="shop-title">{product[0].name}</div>
            {/* <div className="shop-rating">
              <span>
                Rating 
              </span>
              <span>
                Votes 
              </span>
              <span>
                Runtime 
              </span>
              <span>
                Year
              </span>
            </div> */}
            <div className="shop-plot"></div>
            <div className="shop-info">
              <div>
                <span>Origin of Country</span>
                <span>{product[0].originOfCountry}</span>
              </div>

              <div>
                <span>Materials</span>
                <span>{product[0].materials}</span>
              </div>
             
              <div>
                <span>Color</span>
                <span>{product[0].color}</span>
              </div>
              <div>
                <span>discription</span>
                <span>{product[0].discription}</span>
              </div>
              
            </div>
          </div>
          <div className="section-right">
            <img src={product[0].imageUrl} alt={product[0].name} />
          </div>
        
   
    </div>
    )
}

export default ShopDetail
