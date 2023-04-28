import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-slice";
import createListingReducer from "./createListing-slice";

export const store = configureStore({
  reducer: { user: userReducer, createListing: createListingReducer },
});
