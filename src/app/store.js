import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
import { testSlice } from "../features/test/testSlice";

import cartReducer from "../features/cart/cartSlice";
import testReducer from "../features/test/testSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    test: testReducer,
  },
});
