// Import the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the reducers for bag and wish features
import bagReducer from "../Features/BagItems/BagSlice.js";
import wishReducer from "../Features/WishItems/WishSlice.js";

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    bag: bagReducer, // Assign the bagReducer to handle the 'bag' state
    wish: wishReducer, // Assign the wishReducer to handle the 'wish' state
  },
});
