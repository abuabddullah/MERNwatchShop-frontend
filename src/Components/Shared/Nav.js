import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/home">
        <h2>MERN Watch Shop</h2>
      </Link>
      <Link>
        <div className="nav-bag">
          <span className="BsFillBagCheckFill">
            <BsFillBagCheckFill />
          </span>
          <span className="bag-quantity">0</span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
