import { View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import ListingItem from "../../componets/ListingItem";
import CreateListingBtn from "../../componets/CreateListingBtn";
import { useSelector } from "react-redux";
const ManageListings = ({ navigation }) => {
  const allListings = useSelector((state) => state.allListing.allListings);
  const uid = useSelector((state) => state.user.personalInfo.uid);

  const myListings = allListings.filter(
    (listing) => listing.personalInfo.uid === uid
  );

  return (
    <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 20 }}>
      <FlatList
        data={myListings}
        renderItem={({ item }) => (
          <ListingItem flag={true} item={item.listingForm} hostMode={true} />
        )}
        keyExtractor={(item) => Math.random().toString()}
        showsVerticalScrollIndicator={false}
      />
      <CreateListingBtn navigation={navigation} path="CreateNewListing" />
    </View>
  );
};

export default ManageListings;
