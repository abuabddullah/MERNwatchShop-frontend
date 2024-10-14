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
    <div className="py-8 px-16">
      <h2 className="text-center text-3xl font-light mb-4">Shopping Cart</h2>
      {!cartItems.length ? (
        <div className="text-center">
          <img
            src="https://i.ibb.co/BjBJQJw/boy-mother-shopping-grocery-jpg.jpg"
            height="200"
            alt="empty-cart"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-light mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-4">
            Looks like you haven't added anything yet
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="/home"
              className="flex items-center text-blue-600 hover:underline"
            >
              <BsArrowLeft className="mr-1" />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <h3 className="font-medium">Product</h3>
            <h3 className="font-medium">Price</h3>
            <h3 className="font-medium">Quantity</h3>
            <h3 className="font-medium">Total</h3>
          </div>
          <div className="border-t border-gray-300">
            {cartItems?.map((cartItem) => (
              <CartItemComponent key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className="flex justify-between items-center border-t border-gray-300 mt-4 pt-4">
            <button
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="text-right">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-bold">${cartTotalAmmount}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Taxes and Shipping Calculate at Checkout
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                Checkout
              </button>
              <div className="flex justify-center items-center mt-4">
                <Link
                  to="/home"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <BsArrowLeft className="mr-1" />
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
