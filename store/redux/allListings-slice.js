import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allListings: [],
  isLoading: false,
  visited: false,
};

export const allListingsSlice = createSlice({
  name: "allListings",
  initialState,
  reducers: {
    setAllListing: (state, action) => {
      state.allListings.push(...action.payload);
      state.visited = true;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAllListing, setIsLoading } = allListingsSlice.actions;

export default allListingsSlice.reducer;
