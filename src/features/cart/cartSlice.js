import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../api/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload: itemId }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increment: (state, { payload: itemId }) => {
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount += 1;
    },
    decrement: (state, { payload: itemId }) => {
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount -= 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, increment, decrement, removeItem, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
