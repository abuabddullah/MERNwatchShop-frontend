import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantityById, increaseQuantityById, removeFromCart } from "../../features/cartSlice";

const CartItemComponent = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleIncreaseQtyById = (cartItem) => {
    dispatch(increaseQuantityById(cartItem));
  };
  const handleDecreaseQtyById = (cartItem) => {
    dispatch(decreaseQuantityById(cartItem));
  };
  return (
    <div className="cart-item">
      <div className="cart-product">
        <div className="">
          <img className="" src={cartItem.image} alt={cartItem.name} />
          <div>
            <h3>{cartItem.name}</h3>
            <p>{cartItem.desc.slice(0, 40) + "..."}</p>
            <button onClick={() => handleRemoveFromCart(cartItem)}>
              Remove
            </button>
          </div>
        </div>
        <div className="cart-product-price ">${cartItem.price}</div>
        <div className="cart-product-quantity ">
          <button
          onClick={() => handleDecreaseQtyById(cartItem)}
          >-</button>
          <div className="count">{cartItem.cartQuantity}</div>
          <button
          onClick={() => handleIncreaseQtyById(cartItem)}
          >+</button>
        </div>
        <div className="cart-product-total-price ">
          ${cartItem.price * cartItem.cartQuantity}
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
