import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allListings: [],
  isLoading: false,
  isDone: false,
  isUploading: false,
  visited: false,
};

export const allListingsSlice = createSlice({
  name: "allListings",
  initialState,
  reducers: {
    setAllListing: (state, action) => {
      state.allListings = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsDone: (state, action) => {
      state.isDone = action.payload;
    },
    setIsUploading: (state, action) => {
      state.isUploading = action.payload;
    },
    addListing: (state, action) => {
      state.allListings.push(action.payload);
    },
  },
});

export const {
  setAllListing,
  setIsLoading,
  setIsDone,
  setIsUploading,
  addListing,
} = allListingsSlice.actions;

export default allListingsSlice.reducer;
