import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listings: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addListing: (state, action) => {
      console.log(action.payload.createListingForm);
      state.listings.push(action.payload);
    },
  },
});

export const { addListing } = userSlice.actions;

export default userSlice.reducer;
