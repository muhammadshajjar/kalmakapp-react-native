import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listings: [],
  userInfo: {
    name: "zeeshan",
    id: "123",
  },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addListing: (state, action) => {
      const creationTime = new Date().toLocaleDateString();
      state.listings.push({
        creationTime,
        listingForm: action.payload.createListingForm,
        userInfo: state.userInfo,
        ratings: 0,
      });
    },
  },
});

export const { addListing } = userSlice.actions;

export default userSlice.reducer;
