import { View, Text, ScrollView } from "react-native";
import React from "react";
import ListingItem from "../../componets/ListingItem";

const AllListings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListingItem flag={true} navigation={navigation} />
        <ListingItem flag={true} navigation={navigation} />
        <ListingItem flag={true} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default AllListings;
