import { setAllListing, setIsLoading, setIsVisited } from "./allListings-slice";

import { collection, query, getDocs } from "firebase/firestore";
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
