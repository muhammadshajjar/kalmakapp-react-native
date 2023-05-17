import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
      return initialState;
    },
    setUserProfileInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
  },
});

export const { addListing, setUserData, setUserProfileInfo, resetState } =
  userSlice.actions;

export default userSlice.reducer;
