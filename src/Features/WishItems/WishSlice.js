import { createSlice } from "@reduxjs/toolkit";

// Function to load wish items from local storage
const loadWishFromStorage = () => {
  try {
    const savedWish = localStorage.getItem("wishItems");
    return savedWish ? JSON.parse(savedWish) : [];
  } catch (err) {
    return [];
  }
};

// Initial state with wish items loaded from local storage
const initialState = {
  wishItems: loadWishFromStorage(),
};

// Create a slice for wish items with actions and reducers
export const WishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    // Action to add an item to the wish list
    addToWish(state, action) {
      const existingItem = state.wishItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.wishItems.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    },
    // Action to remove an item from the wish list
    removeFromWish(state, action) {
      state.wishItems = state.wishItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    },
    // Action to update the quantity of an item in the wish list
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.wishItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
      }
    },
  },
});

// Export actions and reducer
export const { addToWish, removeFromWish, updateQuantity } = WishSlice.actions;
export default WishSlice.reducer;
