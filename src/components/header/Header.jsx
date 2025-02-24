import React, { useState } from 'react'
import "./Header.css"

import { IoSearchOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { LuSearchX } from "react-icons/lu";

const Header = () => {

  const [search, setSearch] = useState(false)
  
  return (
    <div className="header">
      <div className="header-container">
        <div className="search">
          <i>
            {search
            ? <LuSearchX onClick={() => setSearch(!search)} /> 
            : <IoSearchOutline onClick={() => setSearch(!search)} />}
          </i>
          {search === true ? (
            <input type="text" placeholder="Search..." />
          ) : null}
        </div>
        <h1>Avion</h1>
        <div className="cart-login">
          <GrCart />
          <CgProfile />
        </div>
      </div>
      <hr />
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Plant pots</a>
          </li>
          <li>
            <a href="/">Ceramics</a>
          </li>
          <li>
            <a href="/">Tables</a>
          </li>
          <li>
            <a href="/">Chairs</a>
          </li>
          <li>
            <a href="/">Crockery</a>
          </li>
          <li>
            <a href="/">Tableware</a>
          </li>
          <li>
            <a href="/">Cutlery</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header
