import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loadCartFromLocalStorage = () => {
  console.log("Loading cart from local storage");
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cartItems) => {
  console.log("Saving cart to local storage");
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding item to cart:", action.payload);
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (!item) {
        state.items.push(action.payload);
      } else {
        item.quantity += action.payload.quantity;
      }
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      console.log("Removing item from cart:", action.payload.productId);
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
      saveCartToLocalStorage(state.items);
    },
    updateQuantity: (state, action) => {
      console.log("Updating cart item quantity:", action.payload);
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      console.log("Clearing cart");
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export const clearCartFromDatabase = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    console.log("Clearing cart from database");
    await axios.delete("http://localhost:4000/user/cart/clear", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(clearCart());
  } catch (error) {
    console.error("Failed to clear cart from database:", error);
  }
};

export const saveCartToDatabase =
  (productData) => async (dispatch, getState) => {
    const { token } = getState().auth;
    try {
      console.log("Saving cart to database:", productData);
      await axios.post("http://localhost:4000/user/cart/add", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Failed to save cart to database:", error);
    }
  };

export const removeCartItemFromDatabase =
  (productId) => async (dispatch, getState) => {
    const { token } = getState().auth;
    try {
      console.log("Removing cart item from database:", productId);
      await axios.delete("http://localhost:4000/user/cart/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
      });
    } catch (error) {
      console.error("Failed to remove cart item from database:", error);
    }
  };

export const updateCartItemInDatabase =
  (productData) => async (dispatch, getState) => {
    const { token } = getState().auth;
    try {
      console.log("Updating cart item in database:", productData);
      await axios.put("http://localhost:4000/user/cart/update", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Failed to update cart item in database:", error);
    }
  };

export default cartSlice.reducer;
