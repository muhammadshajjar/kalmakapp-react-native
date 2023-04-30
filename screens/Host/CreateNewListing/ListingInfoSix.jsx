import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";

import { useDispatch, useSelector } from "react-redux";

import { addListing } from "../../../store/redux/user-slice";
import { resetForm } from "../../../store/redux/createListing-slice";

import { setShowLoader } from "../../../store/redux/ui-slice";
const ListingInfoSix = ({ navigation }) => {
  const createListing = useSelector((state) => state.createListing);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const doneCreateListingHandler = () => {
    dispatch(resetForm());
    dispatch(addListing(createListing));
  };

  const uploading = () => {
    Toast.show({
      type: "info",
      text1: "Uploading....",
      position: "bottom",
      autoHide: false,
    });
    dispatch(setShowLoader());
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

        {ui.uploading && uploading()}
        {!ui.uploading && ui.showLoader && successToast()}
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
