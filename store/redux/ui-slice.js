import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  uploading: false,
  showLoader: false,
  isBooking: false,
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
    setIsUploading: (state) => {
      state.uploading = true;
    },
    removeIsUploading: (state) => {
      state.uploading = false;
    },
    setShowLoader: (state) => {
      state.showLoader = true;
    },
    setIsBooking: (state) => {
      state.isBooking = true;
    },
    removeIsBooking: (state) => {
      state.isBooking = false;
    },
  },
});

export const {
  setIsLoading,
  removeIsLoading,
  setIsUploading,
  removeIsUploading,
  setShowLoader,
  setIsBooking,
  removeIsBooking,
} = uiSlice.actions;

export default uiSlice.reducer;
