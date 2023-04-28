import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";
import { useDispatch, useSelector } from "react-redux";

import { addListing } from "../../../store/redux/user-slice";
const ListingInfoSix = ({ navigation }) => {
  const dispatch = useDispatch();
  const createListing = useSelector((state) => state.createListing);
  const doneCreateListingHandler = () => {
    dispatch(addListing(createListing));
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text>Upload picture</Text>
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
