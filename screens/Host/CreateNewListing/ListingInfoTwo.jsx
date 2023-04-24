import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

const ListingInfoTwo = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ListingInfoTwo</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Step-1")}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Step-3")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListingInfoTwo;
