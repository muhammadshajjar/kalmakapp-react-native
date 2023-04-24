import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ManageListings = ({ navigation }) => {
  return (
    <View>
      <Text>ManageListings</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateNewListing")}>
        <Text>Create new</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageListings;
