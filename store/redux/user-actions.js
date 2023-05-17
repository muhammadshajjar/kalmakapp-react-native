import { setUserData, setUserProfileInfo } from "./user-slice";

import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

import { setIsLoading, removeIsLoading } from "./ui-slice";
import { Alert } from "react-native";
export const fetchUser = (uid) => {
  return async (dispatch) => {
    dispatch(setIsLoading());
    try {
      const snap = await getDoc(doc(db, "users", uid));
      if (snap.exists()) {
        dispatch(setUserProfileInfo(snap.data().personalInfo));
        dispatch(removeIsLoading());
      } else {
        console.log("No such document");
        dispatch(removeIsLoading());
      }
    } catch (err) {
      console.log("in actions", err.message);
      // Alert.alert("Error", err.message);
      dispatch(removeIsLoading());
    }
  };
};
