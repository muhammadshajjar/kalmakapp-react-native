import { setUserData } from "./user-slice";

import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

import {
  setIsLoading,
  removeIsLoading,
  setIsUploading,
  removeIsUploading,
} from "./ui-slice";
export const updateUser = (userData) => {
  return async (dispatch) => {
    dispatch(setIsUploading());
    try {
      console.log(userData.personalInfo.uid);
      const docRef = doc(db, "users", userData.personalInfo.uid);
      await setDoc(docRef, userData);
      console.log("document is written");
      dispatch(removeIsUploading());
    } catch (err) {
      dispatch(removeIsUploading());
      console.log("not written");
    }
  };
};

export const fetchUser = (uid) => {
  return async (dispatch) => {
    console.log("what is id", uid);
    dispatch(setIsLoading());
    try {
      const snap = await getDoc(doc(db, "users", uid));
      if (snap.exists()) {
        dispatch(setUserData(snap.data()));
        dispatch(removeIsLoading());
      } else {
        console.log("No such document");
        dispatch(removeIsLoading());
      }
    } catch (err) {
      console.log("ERRRR");
      console.log(err.message);
      dispatch(removeIsLoading());
    }
  };
};
