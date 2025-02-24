import React from 'react'
import "./Brand.css"

import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiBankCardLine } from "react-icons/ri";
import { LuSprout } from "react-icons/lu";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand-title">
        <h3>What makes our brand different</h3>
      </div>
      <div className="brand-container">
        <div className="container">
          <i>
            <TbTruckDelivery />
          </i>
          <h4>Next day as standard</h4>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className="container">
          <i>
            <IoIosCheckmarkCircleOutline />
          </i>
          <h4>Made by true artisans</h4>
          <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        <div className="container">
          <i>
            <RiBankCardLine />
          </i>
          <h4>Unbeatable prices</h4>
          <p>
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div className="container">
          <i>
            <LuSprout />
          </i>
          <h4>Recycled packaging</h4>
          <p>We use 100% recycled to ensure our footprint is more manageable</p>
        </div>
      </div>
    </div>
  );
}

export default Brand
