import {
  setAllListing,
  setIsLoading,
  addListing,
  setIsDone,
  setIsUploading,
} from "./allListings-slice";

import {
  collection,
  query,
  getDocs,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
export const getAllListings = () => {
  return async (dispatch) => {
    const allListings = [];
    dispatch(setIsLoading(true));
    try {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const listings = doc.data().listings;
        allListings.push(...listings);
      });

      dispatch(setIsLoading(false));
      dispatch(setAllListing(allListings));
    } catch (err) {
      dispatch(setIsLoading(false));
    }
  };
};

export const setListing = (listing) => {
  return async (dispatch) => {
    dispatch(setIsUploading(true));
    const userDoc = doc(db, "users", listing.personalInfo.uid);
    try {
      await updateDoc(userDoc, {
        listings: arrayUnion(listing),
      });

      dispatch(setIsUploading(false));
      dispatch(addListing(listing));
      dispatch(setIsDone(true));
    } catch (err) {
      console.log("something went wrong in adding listing");
      dispatch(setIsUploading(false));
    }
  };
};
