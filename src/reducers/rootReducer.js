// src/reducers/rootReducer.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
// import BagReducer from "./bagSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
