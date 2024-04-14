import { createSlice } from '@reduxjs/toolkit';

export const toBagSlice = createSlice({
  name: 'toBag',
  initialState: {
    items: [],
  },
  reducers: {
    addToBag: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 }); // Add quantity property
    },
    removeFromBag: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToBag, removeFromBag, updateQuantity } = toBagSlice.actions;

export default toBagSlice.reducer;
