import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Nav = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishedItems } = useSelector((state) => state.wishlist);
  return (
    <nav className="nav-bar">
      <Link to="/home">
        <h2>MERN Watch Shop</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <span className="BsFillBagCheckFill">
            <BsFillBagCheckFill />
          </span>
          <span className="bag-quantity">{cartItems.length}</span>
        </div>
      </Link>
      <Link to="/wishlist">
        <div className="nav-bag">
          <span className="BsFillBagCheckFill">
            <FaHeart />
          </span>
          <span className="bag-quantity">{wishedItems.length}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
