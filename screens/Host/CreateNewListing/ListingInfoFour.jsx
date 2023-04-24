import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

const ListingInfoFour = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ListingInfoFour</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Step-3")}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Step-5")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListingInfoFour;
