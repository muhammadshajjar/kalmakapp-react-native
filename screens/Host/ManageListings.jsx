import { View, FlatList } from "react-native";
import React from "react";

import ListingItem from "../../componets/ListingItem";
import CreateListingBtn from "../../componets/CreateListingBtn";
import { useSelector } from "react-redux";
const ManageListings = ({ navigation }) => {
  const myListings = useSelector((state) => state.user.listings);

  return (
    <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 20 }}>
      <FlatList
        data={myListings}
        renderItem={({ item }) => (
          <ListingItem flag={true} item={item.listingForm} />
        )}
        keyExtractor={(item) => Math.random().toString()}
        showsVerticalScrollIndicator={false}
      />
      <CreateListingBtn navigation={navigation} path="CreateNewListing" />
    </View>
  );
};

export default ManageListings;
