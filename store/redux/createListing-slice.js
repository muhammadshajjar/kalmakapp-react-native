import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  createListingForm: {
    stepOne: {
      name: "",
      description: "",
    },
    stepTwo: {},
    stepThree: {},
    stepFour: [],
    stepFive: {},
    stepSix: {},
  },
};
export const createListingSlice = createSlice({
  name: "createListing",
  initialState,
  reducers: {
    fillStepOne: (state, action) => {
      state.createListingForm.stepOne = action.payload;
    },
    fillStepTwo: (state, action) => {
      state.createListingForm.stepTwo = action.payload;
    },
    fillStepThree: (state, action) => {
      state.createListingForm.stepThree = action.payload;
    },
    fillStepFour: (state, action) => {
      if (state.createListingForm.stepFour.includes(action.payload)) {
        state.createListingForm.stepFour =
          state.createListingForm.stepFour.filter(
            (item) => item !== action.payload
          );
      } else {
        state.createListingForm.stepFour.push(action.payload);
      }
    },
    fillStepFive: (state, action) => {
      state.createListingForm.stepFive = action.payload;
    },
    fillStepSix: (state, action) => {
      state.createListingForm.stepSix = action.payload;
    },
  },
});

export const {
  fillStepOne,
  fillStepTwo,
  fillStepThree,
  fillStepFour,
  fillStepFive,
  fillStepSix,
} = createListingSlice.actions;

export default createListingSlice.reducer;
