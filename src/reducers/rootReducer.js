// src/reducers/rootReducer.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import BagReducer from "./bagSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    Bag: BagReducer,
  },
});
