import { createSlice } from '@reduxjs/toolkit';

export const toBagSlice = createSlice({
  name: 'toBag',
  initialState: {
    items: [],
  },
  reducers: {
    addToBag: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBag: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToBag, removeFromBag } = toBagSlice.actions;

export default toBagSlice.reducer;
