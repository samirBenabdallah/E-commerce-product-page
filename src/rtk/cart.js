import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  initialState: {
    isEmpty: true,
    cartInfo: {},
  },
  name: "cart",
  reducers: {
    addCart: (state, { payload }) => {
      state.isEmpty = false;
      state.cartInfo = payload;
    },
    deleteCart: (state) => {
      state.isEmpty = true;
      state.cartInfo = {};
    },
  },
});
export default cart.reducer;
export const { addCart, deleteCart } = cart.actions;
