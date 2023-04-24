import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

const ListingInfoFive = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ListingInfoFive</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Step-4")}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Step-6")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListingInfoFive;
