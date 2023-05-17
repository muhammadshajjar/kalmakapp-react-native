import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    removeIsLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, removeIsLoading } = uiSlice.actions;

export default uiSlice.reducer;
