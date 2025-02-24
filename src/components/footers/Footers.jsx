import React from 'react'
import "./Footers.css"
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from "react-icons/fa";

const Footers = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="container">
          <p className="menu" href="/">Menu</p>
          <a href="/">New arrivals</a>
          <a href="/">Best sellers</a>
          <a href="/">Recently viewed</a>
          <a href="/">Popular this week</a>
          <a href="/">All products</a>
        </div>
        <div className="container">
          <p href="/" className="categories">
            Categories
          </p>
          <a href="/">Crockery</a>
          <a href="/">Furniture</a>
          <a href="/">Homeware</a>
          <a href="/">Plants</a>
          <a href="/">pots</a>
          <a href="/">Chairs</a>
          <a href="/">Crockery</a>
        </div>
        <div className="container">
          <p href='/' className="our-company">Our company</p>
          <a href="/">About us</a>
          <a href="/">Vacancies</a>
          <a href="/">Contact us</a>
          <a href="/">Returns</a>
          <a href="/">policy</a>
        </div>
        <div className="email">
          <p>Join our mailing list</p>
          <label>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Sign up</button>
          </label>
        </div>
      </div>
      <hr />
      <div className="footer-down">
        <p>Copyright 2022 Avion LTD</p>
        <div className="icons">
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            <FaSkype />
            <FaTwitter />
            <FaPinterest />
        </div>
      </div>
    </div>
  );
}

export default Footers
