import React from 'react'
import "./Product.css"
import { product } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="product">
      <div className="product-container">
        {product.map((item, index) => {
          return (
            <div key={index} className="container">
              <img src={item.img} alt="" />
              <div>
                <h4>{item.name}</h4>
                <p>£{item.price}</p>
              </div>
            </div>
          );
        }).slice(0, 4)}
      </div>
      <Link to='/products'>View collection</Link>
    </div>
  );
}

export default Product
