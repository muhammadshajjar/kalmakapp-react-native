import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listings: [],
  personalInfo: {
    userName: "",
    email: "",
    uid: "",
  },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState: (state) => {
      console.log("resetForm");
      return initialState;
    },

    setUserData: (state, action) => {
      console.log("in the set user");
      console.log(action.payload);
      return action.payload;
    },

    setUserProfileInfo: (state, action) => {
      console.log("in set user profile", action.payload);
      state.personalInfo = action.payload;
    },

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

export const { addListing, setUserData, setUserProfileInfo, resetState } =
  userSlice.actions;

export default userSlice.reducer;
