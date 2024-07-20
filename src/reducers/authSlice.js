import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token"),
  },
  reducers: {
    signIn: (state, action) => {
      console.log("Signing in:", action.payload);
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    signOut: (state) => {
      console.log("Signing out");
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    },
    loadUser: (state, action) => {
      console.log("Loading user from token:", action.payload);
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { signIn, signOut, loadUser } = authSlice.actions;

export const signOutAndClearCart = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    await axios.delete("http://localhost:4000/user/cart/clear", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(signOut());
  } catch (error) {
    console.error("Failed to clear cart and sign out:", error);
  }
};

export const signInAndFetchCart = (credentials) => async (dispatch) => {
  try {
    console.log("Signing in with credentials:", credentials);
    const response = await axios.post(
      "http://localhost:4000/user/login",
      credentials
    );
    const { user, token } = response.data;
    dispatch(signIn({ user, token }));
  } catch (error) {
    console.error("Failed to sign in:", error);
  }
};

export const loadUserFromToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      console.log("Loading user from token");
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
