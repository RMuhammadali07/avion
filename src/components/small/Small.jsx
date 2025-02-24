import React from 'react'
import "./Small.css"
import { assets } from '../../assets/assets';

const Small = () => {
  return (
    <div className="small">
      <div className="small-container">
        <div className="small-info">
          <div>
            <h2>It started with a small idea</h2>
            <p>
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>
          <button>View collection</button>
        </div>
        <div className="small-img">
            <img src={assets.small_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Small
