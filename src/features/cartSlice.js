/** here "state = initialState" reffering to the current-state of initialState and "action.payload = product" which is the clicked item from the UI
 * for cartItems: if localstorage has cartItems then parse it to JSON and assign it to cartItems, else assign empty array to cartItems
 * for cartTotalQuantity: if localstorage has cartItems then parse it to JSON and assign it to cartItems, else assign 0 to cartTotalQuantity
 * for cartTotalAmmount: if localstorage has cartItems then parse it to JSON and assign it to cartItems, else assign 0 to cartTotalAmmount
 *   */

/** steps for "addToCart" action-function
 * 1. find the clicked item in the cartItems array(if it exists)
 * 2. if it exists, then increase the quantity of that item
 * 3. if it doesn't exist, then duplicate the item and increase cartQuantity by 1 and add the item to the cartItems array
 * 4. then increase the cartTotalAmmount by the price of the clicked item
 * 6. then increase the cartTotalQuantity by 1
 * 5. then we need to add the cartItems in the localStorage
 *   */

/** steps for "removeFromCart" action-function
 * 1. segregate the non-clicked items from the cartItems array
 * 2. set the replace the previous items array with the segregated items in the cartItems array
 * 3. then decrease the cartTotalAmmount by the price of the clicked item's total pirce
 * 4. then decrease the cartTotalQuantity by the clicked item's total quantity
 * 5. then we need to add the cartItems in the localStorage
 *   */

/** steps for "increaseQuantityById" action-function
 * 1. find the index of the clicked item in the cartItems array
 * 2. increase the cartQuantity of the clicked item by 1
 * 3. then increase the cartTotalQuantity by 1
 * 4. then increase the cartTotalAmmount by the price of the clicked item
 * 5. then we need to add the cartItems in the localStorage
 *   */

/** steps for "decreaseQuantityById" action-function
 * 1. find the index of the clicked item in the cartItems array
 * 2. put condition if the cartQuantity of the clicked item is greater than 1 then decrease the cartQuantity of the clicked item by 1
 * 3. then decrease the cartTotalQuantity by 1
 * 4. then decrease the cartTotalAmmount by the price of the clicked item
 * 5. then we need to add the cartItems in the localStorage
 *   */


import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")).reduce((previousValue, item) => previousValue + Number(item.cartQuantity), 0) : 0,
  cartTotalAmmount: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")).reduce((previousValue, item) => previousValue + Number(item.cartQuantity) * Number(item.price), 0) : 0,
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `"${state.cartItems[itemIndex].name}" cart Quantity : ${state.cartItems[itemIndex].cartQuantity}`,
          {
            position: "bottom-left",
            /* autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined, */
          }
        );
      } else {
        const temptItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temptItem);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
          /* autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined, */
        });
      }
      state.cartTotalQuantity += 1;
      state.cartTotalAmmount += Number(action.payload.price);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const restsItems = state.cartItems.filter( item => item.id !== action.payload.id);
      state.cartItems = restsItems;
      state.cartTotalQuantity -= action.payload.cartQuantity;
      state.cartTotalAmmount -= Number(action.payload.price) * Number(action.payload.cartQuantity);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseQuantityById: (state, action) => { 
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
      state.cartTotalQuantity += 1;
      state.cartTotalAmmount += Number(action.payload.price);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQuantityById: (state, action) => { 
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalQuantity -= 1;
        state.cartTotalAmmount -= Number(action.payload.price);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmmount = 0;
      localStorage.removeItem("cartItems");
    },
  },
  extraReducers: {},
});

export const { addToCart,removeFromCart,increaseQuantityById,decreaseQuantityById,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
