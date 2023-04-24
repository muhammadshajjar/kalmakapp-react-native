import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import ListingItem from "../../componets/ListingItem";
import CreateListingBtn from "../../componets/CreateListingBtn";
const ManageListings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListingItem flag={true} navigation={navigation} />
        <ListingItem flag={true} navigation={navigation} />
        <ListingItem flag={true} navigation={navigation} />
      </ScrollView>

      <CreateListingBtn navigation={navigation} path="CreateNewListing" />
    </View>
  );
};

export default ManageListings;
