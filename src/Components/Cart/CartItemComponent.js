// import React from "react";
// import { useDispatch } from "react-redux";
// import { decreaseQuantityById, increaseQuantityById, removeFromCart } from "../../features/cartSlice";

// const CartItemComponent = ({ cartItem }) => {
//   const dispatch = useDispatch();
//   const handleRemoveFromCart = (cartItem) => {
//     dispatch(removeFromCart(cartItem));
//   };
//   const handleIncreaseQtyById = (cartItem) => {
//     dispatch(increaseQuantityById(cartItem));
//   };
//   const handleDecreaseQtyById = (cartItem) => {
//     dispatch(decreaseQuantityById(cartItem));
//   };
//   return (
//     <div className="cart-item">
//       <div className="cart-product">
//         <div className="">
//           <img className="" src={cartItem.image} alt={cartItem.name} />
//           <div>
//             <h3>{cartItem.name}</h3>
//             <p>{cartItem.desc.slice(0, 40) + "..."}</p>
//             <button onClick={() => handleRemoveFromCart(cartItem)}>
//               Remove
//             </button>
//           </div>
//         </div>
//         <div className="cart-product-price ">${cartItem.price}</div>
//         <div className="cart-product-quantity ">
//           <button
//           onClick={() => handleDecreaseQtyById(cartItem)}
//           >-</button>
//           <div className="count">{cartItem.cartQuantity}</div>
//           <button
//           onClick={() => handleIncreaseQtyById(cartItem)}
//           >+</button>
//         </div>
//         <div className="cart-product-total-price ">
//           ${cartItem.price * cartItem.cartQuantity}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItemComponent;

import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantityById,
  increaseQuantityById,
  removeFromCart,
} from "../../features/cartSlice";

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
    <div className="cart-item mb-4">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            className="w-24 h-24 object-cover mr-4"
            src={cartItem.image}
            alt={cartItem.name}
          />
          <div>
            <h3 className="text-lg font-medium">{cartItem.name}</h3>
            <p className="text-gray-500">
              {cartItem.desc.slice(0, 40) + "..."}
            </p>
            <button
              className="text-red-600 mt-2 hover:underline"
              onClick={() => handleRemoveFromCart(cartItem)}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="text-lg font-semibold">${cartItem.price}</div>
        <div className="flex items-center border rounded">
          <button
            className="px-3 py-1 text-lg font-semibold hover:bg-gray-200"
            onClick={() => handleDecreaseQtyById(cartItem)}
          >
            -
          </button>
          <div className="px-4">{cartItem.cartQuantity}</div>
          <button
            className="px-3 py-1 text-lg font-semibold hover:bg-gray-200"
            onClick={() => handleIncreaseQtyById(cartItem)}
          >
            +
          </button>
        </div>
        <div className="text-lg font-semibold">
          ${cartItem.price * cartItem.cartQuantity}
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
