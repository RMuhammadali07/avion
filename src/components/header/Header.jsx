import React from 'react'
import "./Header.css"

import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="search">
          <CiSearch />
        </div>
        <h1>Avion</h1>
        <div className="cart-login">
          <IoCartOutline />
          <CgProfile />
        </div>
      </div>
      <hr />
      <div className="navbar">
        <ul>
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </div>
    </div>
  );
}

export default Header
