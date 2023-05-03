import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-slice";
import createListingReducer from "./createListing-slice";
import uiReducer from "./ui-slice";
import allListingSlice from "./allListings-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    createListing: createListingReducer,
    ui: uiReducer,
    allListing: allListingSlice,
  },
});
