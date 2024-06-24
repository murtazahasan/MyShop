import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (!item) {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    addFetchedCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, addFetchedCart } =
  cartSlice.actions;

export const saveCartToDatabase =
  (productData) => async (dispatch, getState) => {
    const { token } = getState().auth;
    try {
      await axios.post("http://localhost:4000/cart/add", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Product added to cart in the database:", productData);
    } catch (error) {
      console.error("Failed to save cart to database:", error);
    }
  };

export const removeCartItemFromDatabase =
  (productId) => async (dispatch, getState) => {
    const { token } = getState().auth;
    try {
      await axios.delete("http://localhost:4000/cart/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
      });
      console.log("Product removed from cart in the database:", productId);
    } catch (error) {
      console.error("Failed to remove cart item from database:", error);
    }
  };

export const updateCartItemInDatabase =
  (productData) => async (dispatch, getState) => {
    const { token } = getState().auth;
    try {
      await axios.put("http://localhost:4000/cart/update", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Cart item updated in the database:", productData);
    } catch (error) {
      console.error("Failed to update cart item in database:", error);
    }
  };

export default cartSlice.reducer;
