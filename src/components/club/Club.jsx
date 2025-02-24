import React from 'react'
import "./Club.css"
import { IoIosCheckmarkCircle } from "react-icons/io";

const Club = () => {
  return (
    <div className="club">
      <div className="club-container">
        <h2>Join the club and get the benefits</h2>
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div>
          <p>
            <IoIosCheckmarkCircle /> Exclusive offers
          </p>
          <p>
            <IoIosCheckmarkCircle /> Free events
          </p>
          <p>
            <IoIosCheckmarkCircle /> Large discounts
          </p>
        </div>
        <form>
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Club
