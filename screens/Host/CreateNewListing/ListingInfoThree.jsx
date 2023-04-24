import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

const ListingInfoThree = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ListingInfoThree</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Step-2")}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Step-4")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListingInfoThree;
