import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";

import { useDispatch, useSelector } from "react-redux";

import { resetForm } from "../../../store/redux/createListing-slice";

import { setListing } from "../../../store/redux/allListings-actions";
import uuid from "react-native-uuid";
const ListingInfoSix = ({ navigation }) => {
  const createListing = useSelector((state) => state.createListing);
  const personalInfo = useSelector((state) => state.user.personalInfo);
  const dispatch = useDispatch();
  const { isDone, isUploading } = useSelector((state) => state.allListing);
  const doneCreateListingHandler = () => {
    dispatch(resetForm());
    const creationTime = new Date().toLocaleDateString();
    const listingId = uuid.v4();
    dispatch(
      setListing({
        listingId,
        creationTime,
        listingForm: createListing.createListingForm,
        personalInfo,
        ratings: 0,
        wishListUsers: [],
      })
    );
  };

  const uploading = () => {
    Toast.show({
      type: "info",
      text1: "Uploading....",
      position: "bottom",
      autoHide: false,
    });
  };
  const successToast = () => {
    Toast.hide();
    Toast.show({
      type: "success",
      text1: "Successfully created",
      position: "top",
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text>Upload picture</Text>
        {isUploading && uploading()}
        {!isUploading && isDone && successToast()}
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ListingFormNavigation
            navigation={navigation}
            bPath="Step-5"
            forwIsShown={false}
            checkIsShown={true}
            onDone={doneCreateListingHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoSix;
const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
});
