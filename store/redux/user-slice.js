import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listings: [],
  personalInfo: {
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
        personalInfo: state.personalInfo,
        ratings: 0,
      });
    },
  },
});

export const { addListing } = userSlice.actions;

export default userSlice.reducer;
