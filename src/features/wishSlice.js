import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishedItems: localStorage.getItem("wishedItems")
    ? JSON.parse(localStorage.getItem("wishedItems"))
    : [],
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemIndex = state.wishedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        toast.info(
          `"${state.wishedItems[itemIndex].name}" already in wishlist`,
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
        state.wishedItems.push(action.payload);
        toast.success(`${action.payload.name} added to wishlist`, {
          position: "bottom-left",
          /* autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined, */
        });
      }
      localStorage.setItem("wishedItems", JSON.stringify(state.wishedItems));
    },
    removeFromWishlist: (state, action) => {
      const restsItems = state.wishedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishedItems = restsItems;
      localStorage.setItem("wishedItems", JSON.stringify(state.wishedItems));
    },
    clearWishlist: (state) => {
      state.wishedItems = [];
      localStorage.removeItem("wishedItems");
    },
  },
  extraReducers: {},
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishSlice.actions;

export default wishSlice.reducer;
