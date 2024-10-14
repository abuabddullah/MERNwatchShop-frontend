import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import { clearCart } from "../../features/cartSlice";

const Cart = () => {
  const { cartItems, cartTotalAmmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {!cartItems.length ? (
        <div className="cart-empty">
          <img
            src="https://i.ibb.co/BjBJQJw/boy-mother-shopping-grocery-jpg.jpg"
            height="200"
            alt="empty-cart-ho-home"
          />
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet</p>
          <div className="start-shopping">
            <Link to="/home">
              <BsArrowLeft />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items borderTop">
            {cartItems?.map((cartItem) => (
              <CartItemComponent key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="ammount">${cartTotalAmmount}</span>
              </div>
              <p>Taxes and Shipping Calculate at Checkout</p>
              <button>Checkout</button>
              <div className="continue-shopping">
                <Link to="/home">
                  <BsArrowLeft />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
