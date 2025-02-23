// This file contains the Redux slice for managing items in the shopping bag.
// It includes actions and reducers for adding, removing, and updating items in the bag.

import { createSlice } from "@reduxjs/toolkit";

const loadBagFromStorage = () => {
  try {
    const savedBag = localStorage.getItem("bagItems");
    return savedBag ? JSON.parse(savedBag) : [];
  } catch (err) {
    return [];
  }
};

const initialState = {
  bagItems: loadBagFromStorage(),
};

export const BagSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToBag(state, action) {
      const existingItem = state.bagItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.bagItems.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("bagItems", JSON.stringify(state.bagItems));
    },
    removeFromBag(state, action) {
      state.bagItems = state.bagItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("bagItems", JSON.stringify(state.bagItems));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.bagItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem("bagItems", JSON.stringify(state.bagItems));
      }
    },
  },
});

export const { addToBag, removeFromBag, updateQuantity } = BagSlice.actions;

export default BagSlice.reducer;
