import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addFetchedCart } from "./cartSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token"),
  },
  reducers: {
    signIn: (state, action) => {
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    loadUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { signIn, signOut, loadUser } = authSlice.actions;

export const signInAndFetchCart = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/user/login",
      credentials
    );
    const { user, token } = response.data;
    dispatch(signIn({ user, token }));

    const cartResponse = await axios.get("http://localhost:4000/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addFetchedCart(cartResponse.data));
  } catch (error) {
    console.error("Failed to sign in and fetch cart:", error);
  }
};

export const loadUserFromToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(
        "http://localhost:4000/user/my-details",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = response.data.user;
      dispatch(loadUser({ user, token }));
    } catch (error) {
      console.error("Failed to load user from token:", error);
      dispatch(signOut());
    }
  }
};

export default authSlice.reducer;
