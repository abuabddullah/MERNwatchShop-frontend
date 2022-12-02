import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response?.data;
    } catch (error) {
      //   return rejectWithValue(error.response.data);
      return rejectWithValue("error fetching products");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";

      //   state.items = state.items.concat(action.payload);
      state.items = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
