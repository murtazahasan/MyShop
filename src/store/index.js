import { configureStore } from "@reduxjs/toolkit";
import toBagReducer from "./toBag";

const store = configureStore({
  reducer: {
    toBag: toBagReducer,
  },
});

export default store;
