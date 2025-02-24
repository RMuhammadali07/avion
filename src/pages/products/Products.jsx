import React from 'react'
import "./Products.css"
import { assets, product } from '../../assets/assets'

const Products = () => {
  return (
    <div className="products">
      <div className="products-title">
        <img src={assets.products_title} alt="" />
      </div>
      <div className="products-container">
        <div className="products-left">
          <div className="product-type">
            <h5>Product type</h5>
            <div>
              <label>
                <input type="checkbox" />
                Furniture
              </label>
              <label>
                <input type="checkbox" />
                Homeware
              </label>
              <label>
                <input type="checkbox" />
                Sofas
              </label>
              <label>
                <input type="checkbox" />
                Light fittings
              </label>
              <label>
                <input type="checkbox" />
                Accessories
              </label>
            </div>
          </div>

          <div className="price">
            <h5>Price</h5>
            <div>
              <label>
                <input type="checkbox" />0 - 100
              </label>
              <label>
                <input type="checkbox" />
                101 - 250
              </label>
              <label>
                <input type="checkbox" />
                250 +
              </label>
            </div>
          </div>

          <div className="designer">
            <h5>Designer</h5>
            <div>
              <label>
                <input type="checkbox" />
                Robert Smith
              </label>
              <label>
                <input type="checkbox" />
                Liam Gallagher
              </label>
              <label>
                <input type="checkbox" />
                Biggie Smalls
              </label>
              <label>
                <input type="checkbox" />
                Thom Yorke
              </label>
            </div>
          </div>
        </div>

        <div className="product-item">
          {product.map((item, index) =>{
            return (
              <div key={index} className="product-card">
                <img src={item.img} alt={item.name} />
                <div className="product-info">
                  <h4>{item.name}</h4>
                  <p>£{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products
